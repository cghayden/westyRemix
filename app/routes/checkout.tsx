//https://stripe.com/docs/stripe-js/react
//The Elements provider wraps any subcomponents that render Stripe Elements. It expects a stripe prop and since we’re using the PaymentElement, we also need to pass an options prop.
import { loadStripe } from '@stripe/stripe-js';
import { Outlet, useLoaderData } from '@remix-run/react';
import { Elements } from '@stripe/react-stripe-js';
import { createPaymentIntent } from '~/lib/stripePaymentIntent';

const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8');

export const loader = async () => {
  return await createPaymentIntent();
};

export default function StripeElementsProvider() {
  const paymentIntent = useLoaderData();
  console.log('paymentIntent', paymentIntent);

  // The stripe prop wants either reference to a fully initialized instance of the Stripe.js client, or a promise that will eventually resolve to one. Luckily, @stripe/stripe-js has a helper for this called loadStripe where we pass in our publishable API key and get back a promise.
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: '{{CLIENT_SECRET}}',
  // };

  return (
    <Elements
      stripe={stripePromise}
      options={{ clientSecret: paymentIntent.client_secret }}
    >
      <Outlet />
    </Elements>
  );
}
