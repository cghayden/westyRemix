import { useLoaderData } from '@remix-run/react';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  return await retrievePaymentIntent(id);
};

export default function OrderSuccessPage() {
  const paymentIntent = useLoaderData();

  return (
    <div>
      <h3>Thank you for your payment!</h3>
      <pre>{JSON.stringify(paymentIntent, null, 2)}</pre>
    </div>
  );
}
