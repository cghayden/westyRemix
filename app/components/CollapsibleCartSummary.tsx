import type { OrderDetails } from 'myTypes'
import { useState } from 'react'
import PlaySvg from '~/icons/PlaySvg'
import calcTotalPrice from '~/lib/calcCartTotal'
import formatMoney from '~/lib/formatMoney'

export default function CollapsibleCartSummary({
  orderDetails,
  shippingCost,
}: {
  orderDetails: OrderDetails
  shippingCost: number
}) {
  const [showSummary, toggleShowSummary] = useState(false)
  const cartItems = orderDetails.cart
  const subtotal = calcTotalPrice(cartItems)
  if (!cartItems.length) return <div>Your cart is empty</div>
  return (
    <>
      <div className='flex p-2 w-full items-center '>
        <button
          className='self-start p-2'
          onClick={() => toggleShowSummary(!showSummary)}
        >
          <div className={`${showSummary ? 'rotate-90' : ''}`}>
            <PlaySvg />
          </div>
        </button>
        <p>{showSummary ? `Hide Order Summary` : `Show Order Summary`}</p>
        <div className='flex items-end ml-auto font-semibold text-xl'>
          <p>Total Cost:</p>
          <p className='w-20'>{`$${formatMoney(subtotal + shippingCost)}`}</p>
        </div>
      </div>
      <div className=''>
        {showSummary ? (
          <ul className='p-2 flex flex-col items-end'>
            {cartItems.map((cartItem) => (
              <li className='flex' key={cartItem.variant_id}>
                {`${cartItem.quantity} ${cartItem.name}, ${cartItem.grind}: `}
                <p className='w-20'>
                  {`$${formatMoney(cartItem.price * cartItem.quantity)}`}
                </p>
              </li>
            ))}
            {orderDetails?.fulfillmentDetails?.method === 'shipping' && (
              <li className='flex'>
                Shipping:
                <p className='w-20'>{`$${formatMoney(shippingCost)}`}</p>
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </>
  )
}
