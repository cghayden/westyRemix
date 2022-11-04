async function writeOrderToSanity({
  name,
  email,
  phone,
  number,
  total,
  orderItems,
  stripe_id,
  deliveryMethod,
  pickupLocation,
  shippingName,
  shippingAddressLine1,
  shippingAddressLine2,
  shippingCity,
  shippingState,
  shippingZip,
  customerComments,
  env,
}) {
  const configuredOrderItems = orderItems.map((orderItem) => {
    return {
      name: orderItem.name,
      grind: orderItem.grind,
      size: orderItem.size,
      quantity: orderItem.quantity,
      _key: nanoid(),
    };
  });

  const orderDate = new Date().toISOString();
  const doc = {
    _type: 'order',
    customerName: name,
    customerEmail: email,
    customerPhone: phone,
    number,
    total: total,
    orderItems: configuredOrderItems,
    orderDate,
    stripe_id,
    deliveryMethod,
    pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingState,
    shippingZip,
    customerComments,
    shipped: false,
  };
  if (env !== 'production') {
    await SanityDevelopment.create(doc)
      .then((res) => {
        console.log('order written to sanity dev db', res);
      })
      .catch((err) => {
        console.error('error writing order to Sanity:', err);
        // notify neighborly of error writing to sanity orders
      });
    return;
  }
  await Sanity.create(doc)
    .then((res) => {
      console.log('order written to sanity', res);
    })
    .catch((err) => {
      console.error('error writing order to Sanity:', err);
      // notify neighborly of error writing to sanity orders
    });
}

export { writeOrderToSanity };
