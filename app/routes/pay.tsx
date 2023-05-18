import { ActionArgs, redirect } from '@remix-run/node'
import { Outlet, useActionData, useRouteError } from '@remix-run/react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import invariant from 'tiny-invariant'
import { Coffee } from 'sanityTypes'
import { getClient } from '~/lib/sanity/getClient'
import checkAvailability from '~/lib/checkAvailability'
import calcVerifiedTotal from '~/lib/calcVerifiedTotal'
import reduceCartByName from '~/lib/reduceCartByName'
import { createPaymentIntent } from '~/lib/stripePaymentIntent'
import { OrderDetails } from 'myTypes'
import calcShipping from '~/lib/calcShipping'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

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
  // create array of coffeeNames that need to be queried in Sanity
  const coffeeInCart: string[] = Object.keys(cartKeyedByName)
  // query Sanity to verify prices and stock
  const sanityQuery = `*[_type == "coffee" && name in ${JSON.stringify(
    coffeeInCart
  )} && !(_id in path("drafts.**"))] {name, price, stock}
    `
  const sanityResponse: Coffee[] = await getClient().fetch(sanityQuery)
  // is product still in db?, and if so, does available stock satisfy what is quantity in the cart?

  const availableCoffee = sanityResponse.map((item) => item.name)
  // set current prices and inStock onto each CartItem
  sanityResponse.forEach((coffee) => {
    let key: string = coffee.name
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

  //calculate total with shipping based on verified prices
  const total = calcVerifiedTotal(cartKeyedByName)
  const shippingCost = calcShipping(total)

  orderDetails.fulfillmentDetails.shippingCost = shippingCost
  const typedOrderDetails: OrderDetails = {
    cart,
    total: total + shippingCost,
    customerDetails: orderDetails.customerDetails,
    fulfillmentDetails: orderDetails.fulfillmentDetails,
    id: null,
  }

  return await createPaymentIntent(typedOrderDetails).catch((err) => {
    throw Error(err)
  })
}

export default function Pay() {
  const paymentIntent = useActionData<typeof action>()

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
