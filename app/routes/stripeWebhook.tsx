import { ActionArgs } from '@remix-run/node';
import { OrderDetails } from 'myTypes';
import Stripe from 'stripe';
import { writeOrderToSanity } from '~/lib/sanity/writeOrder';

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

export const action = async ({ request }: ActionArgs) => {
  const secret = process.env.STRIPE_WEBHOOKS_SECRET;
  const signature = request.headers.get('stripe-signature');
  let event;
  const payload = await request.text();
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch (err: any) {
    return new Response(err.message, { status: 400 });
  }
  console.log('event', event);
  if (event.type === 'charge.succeeded') {
    console.log('payment succeeded');
    console.log(event.data.object.metadata);

    const orderDetails: OrderDetails = JSON.parse(
      event.data.object.metadata.orderDetails
    );
    const cartItems = orderDetails.cart;
    const orderId = orderDetails.id;
    const total = orderDetails.total;

    try {
      writeOrderToSanity({
        cart: cartItems,
        customer: orderDetails.customer,
        fulfillment: orderDetails.fulfillment,
        total,
        id: orderId,
      });
    } catch (err) {
      console.log('error writing to sanity:', err);
    }
  }
  return {};
};
