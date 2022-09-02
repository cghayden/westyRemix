import Stripe from 'stripe';

/*@ts-ignore*/
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

export async function createPaymentIntent() {
  return await stripe.paymentIntents.create({
    amount: 2000,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });
}
