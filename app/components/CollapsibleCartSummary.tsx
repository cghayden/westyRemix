import { useState } from 'react'
import { useCartItems } from '~/context/useCart'
import PlaySvg from '~/icons/PlaySvg'
import calcTotalPrice from '~/lib/calcCartTotal'
import formatMoney from '~/lib/formatMoney'

export default function CollapsibleCartSummary() {
  const [showSummary, toggleShowSummary] = useState(false)
  const cartItems = useCartItems()
  const subtotal = calcTotalPrice(cartItems)
  const shipping = subtotal < 4999 ? 1000 : 0
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
          <p className='w-20'>{`$${formatMoney(subtotal + shipping)}`}</p>
        </div>
      </div>
      <div className=''>
        {showSummary ? (
          <ul className='p-2 flex flex-col items-end'>
            {cartItems.map((cartItem) => (
              <li className='flex' key={cartItem.name}>
                {`${cartItem.quantity} ${cartItem.name}, ${cartItem.grind}: `}
                <p className='w-20'>
                  {`$${formatMoney(cartItem.price * cartItem.quantity)}`}
                </p>
              </li>
            ))}
            <li className='flex'>
              Shipping:
              <p className='w-20'>{`$${formatMoney(shipping)}`}</p>
            </li>
          </ul>
        ) : null}
      </div>
    </>
  )
}
