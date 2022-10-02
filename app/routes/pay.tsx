import { Outlet, useLoaderData } from '@remix-run/react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';
const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8');

export const loader = async () => {
  return await createPaymentIntent(7777);
};

export default function Pay() {
  const paymentIntent = useLoaderData();
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
