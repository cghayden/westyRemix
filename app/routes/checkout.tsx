//https://stripe.com/docs/stripe-js/react
//The Elements provider wraps any subcomponents that render Stripe Elements. It expects a stripe prop and since we’re using the PaymentElement, we also need to pass an options prop.
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';
import { Form, useActionData } from '@remix-run/react';
import { ActionArgs } from '@remix-run/node';
import invariant from 'tiny-invariant';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';
import sanityClient from '~/lib/sanity/sanity';
import reduceCartByName from '~/lib/reduceCartByName';
import type { KeyedCartItem } from '../../myTypes';
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
  const cartObjKeyedByName: Record<string, KeyedCartItem> =
    reduceCartByName(cart);

  // create array of coffeeNames that need to be queried in Sanity
  const coffeeInCart: string[] = Object.keys(cartObjKeyedByName);

  // query Sanity to verify prices and stock
  const sanityQuery = `*[_type == "coffee" && name in ${JSON.stringify(
    coffeeInCart
  )} && !(_id in path("drafts.**"))] {name, price, stock}
    `;
  const currentCoffeePrices: Coffee[] = await sanityClient.fetch(sanityQuery);

  //set retrieved prices onto cartobjKeyedByName
  currentCoffeePrices.forEach((coffee) => {
    let key: string = coffee.name;
    cartObjKeyedByName[key].price = coffee.price;
  });

  //calculate total with shipping based on verified prices
  const total = calcVerifiedTotal(cartObjKeyedByName);
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
