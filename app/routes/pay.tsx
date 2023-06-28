import { redirect } from '@remix-run/node'
import { Outlet, useActionData, useRouteError } from '@remix-run/react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import invariant from 'tiny-invariant'
import { getClient } from '~/lib/sanity/getClient'
import checkAvailability from '~/lib/checkAvailability'
import calcVerifiedTotal from '~/lib/calcVerifiedTotal'
import reduceCartByName from '~/lib/reduceCartByName'
import { createPaymentIntent } from '~/lib/stripePaymentIntent'
import calcShipping from '~/lib/calcShipping'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import type { Coffee } from 'sanityTypes'
import type { OrderDetails } from 'myTypes'
import type { ActionArgs } from '@remix-run/node'

const stripePromise = loadStripe('pk_test_CkfBPTwVc1IMB6BXSDsSytR8')

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const orderDetailsBody = form.get('orderDetails')

  invariant(
    typeof orderDetailsBody === 'string',
    'cart not submitted properly; must be a string'
  )

  const orderDetails: OrderDetails = JSON.parse(orderDetailsBody)
  const cart = orderDetails.cart

  //create an OBJ of cart Items keyed by name and quantity, regardless of whole bean or ground, to query sanity and calculate total cost
  const cartKeyedByName = reduceCartByName(cart)

  // rather than fetching all of the products, query for only what is in the cart -> coffeeNames that need to be queried in Sanity
  const coffeeInCart: string[] = Object.keys(cartKeyedByName)
  // query Sanity to get valid inventory and prices
  const sanityQuery = `*[_type == "coffee" && name in ${JSON.stringify(
    coffeeInCart
  )} && !(_id in path("drafts.**"))] {name, price, stock}`

  const inventory: Coffee[] = await getClient().fetch(sanityQuery)

  // is product still in db?, and if so, does available stock satisfy what quantity is in the cart?
  const availableCoffee = inventory.map((item) => item.name)
  // set current prices and inStock onto each CartItem
  inventory.forEach((coffee) => {
    let key = coffee.name
    cartKeyedByName[key].price = coffee.price
    cartKeyedByName[key].inStock = coffee.stock
  })

  // function to check verified availability against desired order
  const warningMessages = checkAvailability(cartKeyedByName, availableCoffee)

  // if any insufficientStock or unavailable, return to reviewCart page with message to client in url query string
  if (warningMessages.length > 0) {
    return redirect(
      `reviewCart/?warnings=${warningMessages.join('&warnings=')}`
    )
  }

  //calculate subtotal and shipping based on verified prices
  const subtotal = calcVerifiedTotal(cartKeyedByName)
  const shippingCost = calcShipping(subtotal, orderDetails.fulfillmentDetails)

  orderDetails.fulfillmentDetails.shippingCost = shippingCost
  const verifiedOrderDetails: OrderDetails = {
    cart,
    total: subtotal + shippingCost,
    customerDetails: orderDetails.customerDetails,
    fulfillmentDetails: orderDetails.fulfillmentDetails,
    id: null,
  }

  const paymentIntent = await createPaymentIntent(verifiedOrderDetails).catch(
    (err) => {
      throw Error(err)
    }
  )

  return { paymentIntent, orderDetails, shippingCost }
}

export default function Pay() {
  const { paymentIntent } = useActionData()

  if (!paymentIntent || !paymentIntent.client_secret) {
    throw Error('there was an Error connecting to stripe')
  }
  const options = {
    clientSecret: paymentIntent.client_secret,
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <Outlet />
    </Elements>
  )
}
export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
