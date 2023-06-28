import calcTotalPrice from '~/lib/calcCartTotal'
import formatMoney from '~/lib/formatMoney'
import CartListItem from './CartListItem'
import type { CartItem } from 'myTypes'

export default function CartSummary({
  cartItems,
  shipping,
  shippingCost,
}: {
  cartItems: CartItem[]
  shipping?: boolean
  shippingCost?: number
}) {
  const subtotal = calcTotalPrice(cartItems)
  // const shipping = subtotal < 4999 ? 1000 : 0

  if (!cartItems.length) {
    return (
      <div className='my-12 text-center text-lg'>
        <p>You're cart is empty!!</p>
      </div>
    )
  }

  return (
    <div>
      <div>
        <ul>
          {cartItems.map((cartItem) => (
            <CartListItem key={cartItem.variant_id} cartItem={cartItem} />
          ))}
        </ul>
      </div>
      <div className='flex flex-col p-4 text-right mx-auto md:w-2/3'>
        {shipping && (
          <p className='text-xl text-slate-600'>
            Shipping:{' '}
            <span className='ml-2'>{`$${formatMoney(shippingCost)}`}</span>
          </p>
        )}
        <p className='text-2xl text-slate-600 '>
          subtotal: <span className='ml-2'>{`$${formatMoney(subtotal)}`}</span>
        </p>
        {/* 
        <p className='text-sm text-amber-800 h-4'>
          {shipping == 1000 ? `free shipping on orders over $50.00` : null}
        </p>
        <p className='text-2xl py-2'>
          subtotal:{' '}
          <span className='ml-2'>{`$${formatMoney(subtotal + shipping)}`}</span>
        </p> */}
      </div>
    </div>
  )
}
