import { OrderDetails } from 'myTypes';
import SanityClient from '~/lib/sanity/sanity';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890abcdef', 10);

async function writeOrderToSanity(orderDetails: OrderDetails) {
  const orderDate = new Date().toISOString();
  const orderNumber = nanoid();
  // ?? is it ok to assign an object to a var like this , or make a copy {...}
  const cartItems = orderDetails.cart;
  const { customerName, customerEmail, customerPhone } = orderDetails.customer;
  const {
    method,
    pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingPostal_code,
    shippingState,
  } = orderDetails.fulfillment;

  const configuredOrderItems = cartItems.map((cartItem) => {
    return {
      name: cartItem.name,
      grind: cartItem.grind,
      quantity: cartItem.quantity,
      _key: nanoid(),
    };
  });

  const doc = {
    _type: 'order',
    customerName,
    customerEmail,
    customerPhone,
    number: orderNumber,
    total: orderDetails.total,
    orderItems: configuredOrderItems,
    orderDate,
    deliveryMethod: method,
    pickupLocation: method === 'shipping' ? 'NA' : pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingState,
    shippingZip: shippingPostal_code,
    // customerComments,
    shipped: false,
    stripe_id: orderDetails.id,
  };
  // if (env !== 'production') {
  //   await SanityDevelopment.create(doc)
  //     .then((res) => {
  //       console.log('order written to sanity dev db', res);
  //     })
  //     .catch((err) => {
  //       console.error('error writing order to Sanity:', err);
  //       // notify neighborly of error writing to sanity orders
  //     });
  //   return;
  // }
  await SanityClient.create(doc)
    .then((res) => {})
    .catch((err) => {
      throw `Error writing to sanity: ${err}`;
      // notify neighborly of error writing to sanity orders
    });
}

export { writeOrderToSanity };
