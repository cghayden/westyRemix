import { CartStateProvider, useCart } from './CartContext';

type Props = {
  isCartOpen: Boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ isCartOpen, setIsCartOpen }: Props) {
  const { cartContents } = useCart();
  console.log('cartContents', cartContents);
  return (
    <CartStateProvider>
      <div
        className={`p-6 fixed bg-slate-50 h-screen w-11/12 max-w-[650] min-w-[310] top-0 right-0 z-40 transition-all duration-300
  ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex'>
          <h3>Cart</h3>
          <button
            className='ml-auto'
            title='Close Cart'
            aria-label='Close Your Shopping Cart'
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            &times;
          </button>
        </div>
      </div>
    </CartStateProvider>
  );
}
