import { Fragment } from 'react'
import { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { CartItem, OrderDetails } from 'myTypes'
import formatMoney from '~/lib/formatMoney'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('payment_intent')
  if (!id) return null
  const paymentIntent = await retrievePaymentIntent(id)
  const customerDetails = JSON.parse(paymentIntent.metadata.customerDetails)
  const fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  )
  const cartItems = JSON.parse(paymentIntent.description)
  const orderId = paymentIntent.id
  const total = paymentIntent.amount_received

  const orderDetails: OrderDetails = {
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId,
  }

  return orderDetails
}

export default function success() {
  const orderDetails = useLoaderData<typeof loader>()
  const cartItems = orderDetails?.cart
  const customerDetails = orderDetails?.customerDetails
  const fulfillmentDetails = orderDetails?.fulfillmentDetails

  return (
    <main>
      <ContentContainer>
        <h2 className='text-xl font-bold'>Thank You For Your Order!</h2>
        <div className='ml-4'>
          <p>Check your email for a receipt of your order</p>
          <p>
            We'll contact you when your order
            {fulfillmentDetails?.method === 'pickup'
              ? ' is ready for pickup'
              : ' ships'}
          </p>
        </div>
        <div className='mt-4 max-w-xl mx-auto'>
          <h3 className='text-xl font-bold'>your order: </h3>

          <div className='p-2 grid grid-cols-orderSummary place-content-center'>
            {cartItems?.map((cartItem: CartItem, index: number) => (
              <Fragment key={index}>
                <p className='w-10'>{cartItem.quantity}</p>
                <div className='flex flex-col flex-grow ml-4 text-left pr-6'>
                  <p>{cartItem.name}</p>
                  <p className='text-sm'>{cartItem.grind + ' bean'}</p>
                </div>
                <p>{`$${formatMoney(cartItem.price * cartItem.quantity)}`}</p>
              </Fragment>
            ))}
            <p>{''}</p>
            <p className='justify-self-end'>shipping:</p>
            <p>{`$${formatMoney(fulfillmentDetails?.shippingCost)}`}</p>
            <p>{''}</p>
            <p className='justify-self-end font-bold text-lg'>Total:</p>
            <p className='font-bold text-lg'>
              ${formatMoney(orderDetails?.total)}
            </p>
          </div>
        </div>
        <div className='flex justify-evenly'>
          <div>
            <h3 className='font-bold text-lg'>sold to:</h3>
            <div className='grid place-content-center  pb-3'>
              <p className='justify-self-start'>
                {customerDetails?.customerName}
              </p>
              <p className='justify-self-start'>
                {customerDetails?.customerEmail}
              </p>
              <p className='justify-self-start'>
                {customerDetails?.customerPhone}
              </p>
            </div>
          </div>
          {fulfillmentDetails?.method === 'pickup' ? (
            <div>
              <h3 className='text-lg font-bold'>Pickup at:</h3>
              <div className='grid place-content-center  pb-3'>
                <p className='justify-self-start'>
                  {fulfillmentDetails.pickupLocation}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h3 className='text-lg font-bold'>ship to: </h3>
              <div className='grid place-content-center pb-3 '>
                <p className='justify-self-start'>
                  {fulfillmentDetails?.shippingName}
                </p>
                <p className='justify-self-start'>
                  {fulfillmentDetails?.shippingAddressLine1}
                </p>
                <p className='justify-self-start'>
                  {fulfillmentDetails?.shippingAddressLine2}
                </p>
                <p className='justify-self-start'>
                  <span>{fulfillmentDetails?.shippingCity}</span>
                  <span>{fulfillmentDetails?.shippingPostal_code}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </ContentContainer>
    </main>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
