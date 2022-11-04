import { ActionArgs, redirect } from '@remix-run/node';
import { Outlet, useActionData } from '@remix-run/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import invariant from 'tiny-invariant';
import { Coffee } from 'sanityTypes';
import sanityClient from '~/lib/sanity/sanity';
import checkAvailability from '~/lib/checkAvailability';
import calcVerifiedTotal from '~/lib/calcVerifiedTotal';
import reduceCartByName from '~/lib/reduceCartByName';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';

const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8');

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const cartBody = form.get('cart');
  console.log('cartBody', cartBody);
  const orderDetailsBody = form.get('orderDetails');
  // function constructOrderDetails(formData) {
  //   const result = {};
  //   for (const pair of formData.entries()) {
  //     result[pair[0]] = pair[1];
  //   }
  //   return result;
  // }
  // const orderDetails = constructOrderDetails(form);
  // const cart = orderDetails.cart;

  invariant(
    typeof cartBody === 'string',
    'cart not submitted properly; must be a string'
  );
  invariant(
    typeof orderDetailsBody === 'string',
    'cart not submitted properly; must be a string'
  );

  const cart = JSON.parse(cartBody);
  // const orderDetails = JSON.parse(orderDetailsBody);

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
  // is product still in db?, and if so, does available stock satisfy what is quantity in the cart?

  const availableCoffee = sanityResponse.map((item) => item.name);
  // set current prices and inStock onto each CartItem
  sanityResponse.forEach((coffee) => {
    let key: string = coffee.name;
    cartKeyedByName[key].price = coffee.price;
    cartKeyedByName[key].inStock = coffee.stock;
  });
  //separate function to check response availability against order

  const warningMessages = checkAvailability(cartKeyedByName, availableCoffee);
  //calculate total with shipping based on verified prices

  // if any insufficientStock or unavailable, return to reviewCart page with message to client in url query string
  if (warningMessages.length > 0) {
    return redirect(
      `reviewCart/?warnings=${warningMessages.join('&warnings=')}`
    );
  }

  const total = calcVerifiedTotal(cartKeyedByName);
  return await createPaymentIntent(total, cartBody, orderDetailsBody).catch(
    (err) => {
      console.log(err);
      return err;
    }
  );
};

export default function Pay() {
  const paymentIntent = useActionData<typeof action>();
  console.log('paymentIntent', paymentIntent);

  if (!paymentIntent.client_secret) {
    return <p>error</p>;
  }

  return (
    <Elements
      stripe={stripePromise}
      // options={{
      //   clientSecret:
      //     'pi_3LuIt8IelpPXOmiI2As4bJfd_secret_5IMVODJXybZEcywL312Oje2R7',
      // }}
      options={{ clientSecret: paymentIntent.client_secret }}
    >
      <Outlet />
    </Elements>
  );
}
