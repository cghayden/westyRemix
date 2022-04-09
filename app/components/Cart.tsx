import { useCartItems, useCartUtils } from '~/context/useCart';
import CartListItem from './CartListItem';

type Props = {
  isCartOpen: Boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart() {
  const { isCartOpen, toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();
  console.log('cart cartItems', cartItems);
  return (
    <div
      className={`p-6 fixed bg-slate-50 h-screen w-11/12 max-w-[650] min-w-[310] top-0 right-0 z-40 transition-all duration-300
  ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <header className='flex'>
        <h3>Your Cart</h3>
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
    </div>
  );
}
