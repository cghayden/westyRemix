import { LoaderArgs, redirect } from '@remix-run/node';
import { writeOrderToSanity } from '~/lib/sanity/writeOrder';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  if (!id) return null;
  const paymentIntent = await retrievePaymentIntent(id);
  console.log('paymentIntent', paymentIntent);
  const orderDetails = JSON.parse(paymentIntent.metadata.orderDetails);
  const cartItems = JSON.parse(paymentIntent.metadata.cartItems);
  const orderId = paymentIntent.id;
  const total = paymentIntent.amount_received;

  writeOrderToSanity({
    cart: cartItems,
    customer: orderDetails.customerDetails,
    fulfillment: orderDetails.fulfillmentDetails,
    total,
    id: orderId,
  });

  return redirect(`/success?payment_intent=${id}`);
};
