import { LoaderArgs, redirect } from '@remix-run/node';
import { OrderDetails } from 'myTypes';
import { writeOrderToSanity } from '~/lib/sanity/writeOrder';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  if (!id) return null;
  const paymentIntent = await retrievePaymentIntent(id);

  const customerDetails = JSON.parse(paymentIntent.metadata.customerDetails);
  const fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  );
  const cartItems = JSON.parse(paymentIntent.description);
  const orderId = paymentIntent.id;
  const total = paymentIntent.amount_received;

  writeOrderToSanity({
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId,
  });

  return redirect(`/success?payment_intent=${id}`);
  // return redirect('/test');
};
