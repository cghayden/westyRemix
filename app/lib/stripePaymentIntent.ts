import Stripe from 'stripe';

// The docs do not show the config being required, because it's optional when using vanilla javascript. When using typescript it's required because the types are pinned to a specific API version.
// https://github.com/stripe/stripe-node#usage-with-typescript
/*@ts-ignore*/
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

export async function createPaymentIntent(
  total: number,
  cart: string,
  orderDetails: string
) {
  return await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
    description: cart,
    metadata: { orderDetails },
  });
}
export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}
