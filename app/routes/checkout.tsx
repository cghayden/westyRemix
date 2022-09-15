//https://stripe.com/docs/stripe-js/react
//The Elements provider wraps any subcomponents that render Stripe Elements. It expects a stripe prop and since we’re using the PaymentElement, we also need to pass an options prop.
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { Form, useActionData } from '@remix-run/react';
import { ActionArgs, redirect } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';
import sanityClient from '~/lib/sanity/sanity';
import reduceCartByName from '~/lib/reduceCartByName';
import type { CartItem } from '../../myTypes';
import { Coffee } from 'sanityTypes';
import calcVerifiedTotal from '~/lib/calcVerifiedTotal';

//TODO - what if item is out of stock or deleted when sanity queries cart coffees?

const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8');

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  //1. get cart from form submitted by reviewCart.tsx
  const res = body.get('cart');
  invariant(
    typeof res === 'string',
    'cart not submitted properly; must be a string'
  );
  const cart = JSON.parse(res);

  //create an OBJ of cart Items keyed by price and quantity, regardless of whole bean or ground, to query sanity and calculate total cost
  const cartKeyedByName = reduceCartByName(cart);

  // create array of coffeeNames that need to be queried in Sanity
  const coffeeInCart: string[] = Object.keys(cartKeyedByName);

  // query Sanity to verify prices and stock
  const sanityQuery = `*[_type == "coffee" && name in ${JSON.stringify(
    coffeeInCart
  )} && !(_id in path("drafts.**"))] {name, price, stock}
    `;
  const sanityResponse: Coffee[] = await sanityClient.fetch(sanityQuery);
  console.log('currentCoffeePrices', sanityResponse);
  // is product still in db?
  const availableCoffee = sanityResponse.map((item) => item.name);

  //set retrieved prices and stock onto cartKeyedByName
  sanityResponse.forEach((coffee) => {
    let key: string = coffee.name;
    cartKeyedByName[key].price = coffee.price;
    cartKeyedByName[key].inStock = coffee.stock;
  });

  // does available stock satisfy what is in the cart?
  //separate function to check response availability against order

  function checkAvailability(
    cartKeyedByName: Record<string, CartItem>,
    availableCoffee: string[]
  ) {
    const warningMessages = [];
    for (const itemName in cartKeyedByName) {
      if (
        cartKeyedByName[itemName].inStock < cartKeyedByName[itemName].quantity
      ) {
        warningMessages.push(
          `There are only ${cartKeyedByName[itemName].inStock} ${itemName} in stock`
        );
        cartKeyedByName[itemName].insufficientStock = true;
      }
      if (!availableCoffee.includes(cartKeyedByName[itemName].name)) {
        warningMessages.push(`${itemName} is no longer available`);
        cartKeyedByName[itemName].unavailable = true;
      }
    }
    return warningMessages;
  }

  const warningMessages = checkAvailability(cartKeyedByName, availableCoffee);
  //calculate total with shipping based on verified prices

  // if any insufficientStock or unavailable, return to reviewCart page with message to client in url query string
  if (warningMessages.length > 0) {
    return redirect(
      `reviewCart/?warnings=${warningMessages.join('&warnings=')}`
    );
  }

  const total = calcVerifiedTotal(cartKeyedByName);
  return await createPaymentIntent(total);
};

export default function StripeElementsProvider() {
  const paymentIntent = useActionData<typeof action>();
  console.log('paymentIntent', paymentIntent);

  // The stripe prop wants either reference to a fully initialized instance of the Stripe.js client, or a promise that will eventually resolve to one. Luckily, @stripe/stripe-js has a helper for this called loadStripe where we pass in our publishable API key and get back a promise.
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };

  return (
    <>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: paymentIntent.client_secret }}
      >
        <Form>
          <PaymentElement />
          <button>Confirm Payment</button>
        </Form>
      </Elements>
    </>
  );
}
