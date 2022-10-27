import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY);

export const action = async ({ request }) => {
  // console.log(await request.json());
  const secret =
    'whsec_cd767165ad13c795106255e02661a0164198d57245c7c698c4ee8b22637e6252';
  const sig = request.headers.get('stripe-signature');
  let event;
  const payload = await request.text();

  try {
    event = stripe.webhooks.constructEvent(payload, sig, secret);
  } catch (err) {
    return new Response(err.message, {
      status: 400,
    });
  }
  console.log('stripe event:', event);
  if (event.type == 'payment_intent.succeeded') {
    console.log('payment succeeded');
  }

  return {};
};
