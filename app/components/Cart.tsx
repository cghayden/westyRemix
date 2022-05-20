import { useCartItems, useCartUtils } from '~/context/useCart';
import CartListItem from './CartListItem';

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();
  console.log('cart cartItems', Object.values(cartItems));
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
      <div>
        Cart:
        {cartItems.map((cartItem, i) => (
          <div key={cartItem.coffeeId}>
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
