import { LoaderArgs, redirect } from '@remix-run/node';
import { OrderDetails } from 'myTypes';
import { writeOrderToSanity } from '~/lib/sanity/writeOrder';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  if (!id) return null;
  const paymentIntent = await retrievePaymentIntent(id);
  console.log('paymentIntent', paymentIntent);
  const orderDetails: OrderDetails = JSON.parse(
    paymentIntent.metadata.orderDetails
  );
  const cartItems = orderDetails.cart;
  const orderId = paymentIntent.id;
  const total = paymentIntent.amount_received;

  writeOrderToSanity({
    cart: cartItems,
    customer: orderDetails.customer,
    fulfillment: orderDetails.fulfillment,
    total,
    id: orderId,
  });

  return redirect(`/success?payment_intent=${id}`);
};
