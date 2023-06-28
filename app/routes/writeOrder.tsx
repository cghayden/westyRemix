//this is a remix resource route.
// upon successful payment processing, stripe will redirect to this route, where we can now write the order to sanity and update the stock of the product sold, then redirect to 'success' page

import type { LoaderArgs } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { useRouteError } from '@remix-run/react'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import { writeOrderToSanity } from '~/lib/sanity/writeOrder'
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('payment_intent')
  if (!id) return null
  const paymentIntent = await retrievePaymentIntent(id)

  const customerDetails = JSON.parse(paymentIntent.metadata.customerDetails)
  const fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  )
  const cartItems = JSON.parse(paymentIntent.description!)
  const orderId = paymentIntent.id
  const total = paymentIntent.amount_received

  await writeOrderToSanity({
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId,
  }).catch((err) => {
    console.error(err)
    throw Error(err)
  })

  return redirect(`/success?payment_intent=${id}`)
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
