import { Link } from '@remix-run/react'
import { useCartUtils } from '~/context/useCart'
import CartSummary from './CartSummary'

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils()
  return (
    <div
      className={`p-2 fixed bg-slate-100 h-screen w-11/12 max-w-[650px] min-w-[310px] top-0 right-0 z-40 transition-all duration-300 overflow-scroll shadow-2xl
  ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <header className='flex px-2'>
        <h2 className='text-3xl'>Your Cart</h2>
        <button
          className='ml-auto text-3xl'
          title='Close Cart'
          aria-label='Close Your Shopping Cart'
          onClick={() => toggleIsCartOpen(false)}
        >
          &times;
        </button>
      </header>
      <CartSummary />
      <div className='flex justify-evenly'>
        <button
          className='bg-orange-700 text-slate-50 px-6 py-3 rounded'
          onClick={() => toggleIsCartOpen(false)}
        >
          keep shopping
        </button>
        <Link
          className='bg-blue-500 text-blue-50 px-6 py-3 rounded'
          role='link'
          onClick={() => toggleIsCartOpen(false)}
          to='/reviewCart'
        >
          checkout
        </Link>
      </div>
    </div>
  )
}
