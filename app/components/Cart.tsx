import { Link } from '@remix-run/react';
import { useCartItems, useCartUtils } from '~/context/useCart';
import CartSummary from './CartSummary';

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();
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
          className='bg-slate-600 text-slate-50 px-6 py-3 rounded'
          // role='link'
          onClick={() => toggleIsCartOpen(false)}
          // to='/'
        >
          keep shopping
        </button>
        <Link
          className='bg-amber-800 text-amber-50 px-6 py-3 rounded'
          role='link'
          onClick={() => toggleIsCartOpen(false)}
          to='/reviewCart'
        >
          checkout
        </Link>
      </div>
    </div>
  );
}
