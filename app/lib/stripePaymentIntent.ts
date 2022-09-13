import { CartItem } from 'myTypes';
import Stripe from 'stripe';

// The docs do not show the config being required, because it's optional when using vanilla javascript. When using typescript it's required because the types are pinned to a specific API version.
// https://github.com/stripe/stripe-node#usage-with-typescript
/*@ts-ignore*/
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

const calculateOrderTotal = (): number => {
  // get cart  items
  // get shipping
  // await call to sanity to get current prices and check stock
  // calc total + shipping (keep free shipping if price changes result in total below 50?=y)
  return 100000;
};

export async function createPaymentIntent() {
  const total = calculateOrderTotal();
  return await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
}
//helper for fetching PaymentIntent server side
export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}
