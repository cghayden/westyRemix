import SanityClient from '~/lib/sanity/sanity.server'
import { customAlphabet } from 'nanoid'
import { adjustSanityStock } from './adjustSanityStock'
import type { OrderDetails } from 'myTypes'

const nanoid = customAlphabet('1234567890abcdef', 10)

async function writeOrderToSanity(orderDetails: OrderDetails) {
  const orderDate = new Date().toISOString()
  const orderNumber = nanoid()
  const { customerName, customerEmail, customerPhone } =
    orderDetails.customerDetails
  const {
    method,
    pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingPostal_code,
    shippingState,
  } = orderDetails.fulfillmentDetails

  const configuredOrderItems = orderDetails.cart.map((cartItem) => {
    return {
      name: cartItem.name,
      grind: cartItem.grind,
      quantity: cartItem.quantity,
      _key: nanoid(),
    }
  })

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
    pickupLocation: method === 'shipping' ? '--' : pickupLocation,
    shippingName,
    shippingAddressLine1,
    shippingAddressLine2,
    shippingCity,
    shippingState,
    shippingZip: shippingPostal_code,
    // !customerComments,
    shipped: false,
    stripe_id: orderDetails.id,
  }

  await SanityClient.create(doc)
    .then(() => adjustSanityStock(orderDetails.cart))
    .catch((err) => {
      console.error('err', err)
      throw `Error creating order / writing to sanity: ${err}`
      // !notify website owner of error writing the order
    })
}

export { writeOrderToSanity }
