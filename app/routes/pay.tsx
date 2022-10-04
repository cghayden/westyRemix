import { ActionArgs, LoaderArgs } from '@remix-run/node';
import { Outlet, useActionData, useLoaderData } from '@remix-run/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import invariant from 'tiny-invariant';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';
const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8');

export const action = async ({ request }: ActionArgs) => {
  const body = await request.formData();
  const res = body.get('cart');
  invariant(
    typeof res === 'string',
    'cart not submitted properly; must be a string'
  );
  const cart = JSON.parse(res);
  console.log('cart', cart);
  return await createPaymentIntent(7777);
};

// export const loader = async ({ request }: LoaderArgs) => {
//   const body = await request.formData();
//   const res = body.get('cart');
//   const cart = JSON.parse(res);
//   console.log('cart', cart);
//   const url = new URL(request.url);

//   return await createPaymentIntent(7777);
// };

export default function Pay() {
  const paymentIntent = useActionData();
  console.log('paymentIntent', paymentIntent);
  return (
    <div>
      <h1>Pay</h1>
      <Elements
        stripe={stripePromise}
        options={{ clientSecret: paymentIntent.client_secret }}
      >
        <Outlet />
      </Elements>
    </div>
  );
}
