import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CartItem } from 'myTypes';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  if (!id) return null;
  const paymentIntent = await retrievePaymentIntent(id);
  console.log('paymentIntent', paymentIntent);
  return paymentIntent;
};

export default function success() {
  const paymentIntent = useLoaderData<typeof loader>();
  const order = JSON.parse(paymentIntent.description);
  console.log('order', order);
  return (
    <div>
      Thank You for your order! details of your order are below, and you should
      receive a receipt in your email. Please contact us with any questions
      <p>Order:</p>
      <ul>
        {order.map((cartItem: CartItem) => (
          <li key={cartItem.variant_id}>
            {cartItem.quantity} {cartItem.name}, {cartItem.grind}
          </li>
        ))}
      </ul>
      <p>Total Charge: {paymentIntent.amount}</p>
      {paymentIntent.shipping ? (
        <div>
          <p>Ship To:</p>
          <p>{paymentIntent.shipping.name}</p>
          <p>{paymentIntent.shipping.address.line1}</p>
          <p>
            <span>{paymentIntent.shipping.address.city}, </span>
            <span>{paymentIntent.shipping.address.state} </span>
            <span>{paymentIntent.shipping.address.postal_code}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
}
