import { Link } from 'remix';
import { useCartItems, useCartUtils } from '~/context/useCart';
import calcTotalPrice from '~/lib/calcTotal';
import formatMoney from '~/lib/formatMoney';
import CartListItem from './CartListItem';
import CartSummary from './CartSummary';

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();
  const subtotal = calcTotalPrice(cartItems);
  return (
    <div
      className={`p-2 fixed bg-slate-50 h-screen w-11/12 max-w-[650px] min-w-[310px] top-0 right-0 z-40 transition-all duration-300 overflow-scroll
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
        <Link
          className='bg-slate-600 text-slate-50 px-6 py-3 rounded'
          role='link'
          onClick={() => toggleIsCartOpen(false)}
          to='/'
        >
          keep shopping
        </Link>
        <Link
          className='bg-amber-800 text-amber-50 px-6 py-3 rounded'
          role='link'
          onClick={() => toggleIsCartOpen(false)}
          to='/cart'
        >
          checkout
        </Link>
      </div>
      <div>
        Cart:
        {cartItems.map((cartItem, i) => (
          <div key={cartItem.variant_id}>
            <p className='text-2xl font-bold underline'>CartItem {i}</p>
            {Object.keys(cartItem).map((cartItemKey, i) => (
              <p className='text-xl' key={i}>
                <span>
                  {cartItemKey}:{'  '}
                </span>
                {/* @ts-ignore */}
                <span>{cartItem[cartItemKey]}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
