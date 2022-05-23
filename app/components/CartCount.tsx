import { CartItem } from 'myTypes';
import { useCartItems } from '~/context/useCart';

export default function CartCount() {
  const cartItems = useCartItems();

  function calcTotalQuantity(cartItems: CartItem[]) {
    return cartItems.reduce((tally, cartItem) => {
      return tally + cartItem.quantity;
    }, 0);
  }
  if (calcTotalQuantity(cartItems) === 0) {
    return null;
  }
  return (
    <div className='bg-red-500 text-red-50 p-[1px] leading-5 min-w-[18px] h-[18px] mr-[5px] mt-2 text-sm row-span-full col-span-full rounded-full'>
      <p className='-mt-[2px]'>{calcTotalQuantity(cartItems)}</p>
    </div>
  );
}
