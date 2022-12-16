import { OrderDetails } from 'myTypes';
import Stripe from 'stripe';

// The docs do not show the config being required, because it's optional when using vanilla javascript. When using typescript it's required because the types are pinned to a specific API version.
// https://github.com/stripe/stripe-node#usage-with-typescript
/*@ts-ignore*/
const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY, {
  apiVersion: '2022-08-01',
});

export async function createPaymentIntent(orderDetails: OrderDetails) {
  const { fulfillmentDetails } = orderDetails;
  if (fulfillmentDetails.method === 'shipping') {
    return await stripe.paymentIntents.create({
      amount: orderDetails.total,
      receipt_email: orderDetails.customerDetails.customerEmail,
      shipping: {
        name: orderDetails.customerDetails.customerName,
        address: {
          line1: fulfillmentDetails.shippingAddressLine1,
          line2: fulfillmentDetails.shippingAddressLine2,
          city: fulfillmentDetails.shippingCity,
          state: fulfillmentDetails.shippingState,
          postal_code: fulfillmentDetails.shippingPostal_code,
        },
      },
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      description: JSON.stringify(orderDetails.cart),
      metadata: {
        customerDetails: JSON.stringify(orderDetails.customerDetails),
        fulfillmentDetails: JSON.stringify(fulfillmentDetails),
      },
    });
  }

  if (fulfillmentDetails.method === 'pickup') {
    return await stripe.paymentIntents.create({
      amount: orderDetails.total,
      receipt_email: orderDetails.customerDetails.customerEmail,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      description: JSON.stringify(orderDetails.cart),
      metadata: {
        customerDetails: JSON.stringify(orderDetails.customerDetails),
        fulfillmentDetails: JSON.stringify(fulfillmentDetails),
      },
    });
  }
}
export async function retrievePaymentIntent(id: string) {
  return await stripe.paymentIntents.retrieve(id);
}
