import { useCartItems, useCartUtils } from '~/context/useCart';
import CartListItem from './CartListItem';

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();
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
      <div>
        <ul>
          {cartItems.map((cartItem) => (
            <CartListItem key={cartItem.coffeeId} cartItem={cartItem} />
          ))}
        </ul>
      </div>
      <div className='flex flex-col p-4 text-right '>
        <p className='text-xl text-slate-600'>
          Subtotal: <span className='ml-2'>$50.00</span>
        </p>
        <p className='text-xl text-slate-600'>
          Shipping: <span className='ml-2'>$10.00</span>
        </p>
        <p className='text-2xl py-1'>
          Total: <span className='ml-2'>$60.00</span>
        </p>
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
                <span>{cartItem[cartItemKey]}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
