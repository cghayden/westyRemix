import { useCartItems } from '~/context/useCart';
import calcTotalPrice from '~/lib/calcCartTotal';
import formatMoney from '~/lib/formatMoney';
import CartListItem from './CartListItem';

export default function CartSummary() {
  const cartItems = useCartItems();
  const subtotal = calcTotalPrice(cartItems);
  const shipping = subtotal < 4999 ? 1000 : 0;
  return (
    <div>
      <div>
        <ul>
          {cartItems.map((cartItem) => (
            <CartListItem key={cartItem.coffeeId} cartItem={cartItem} />
          ))}
        </ul>
      </div>
      <div className='flex flex-col p-4 text-right '>
        <p className='text-xl text-slate-600'>
          Subtotal: <span className='ml-2'>{`$${formatMoney(subtotal)}`}</span>
        </p>
        <p className='text-xl text-slate-600'>
          Shipping: <span className='ml-2'>{`$${formatMoney(shipping)}`}</span>
        </p>
        <p className='text-2xl py-1'>
          Total:{' '}
          <span className='ml-2'>{`$${formatMoney(subtotal + shipping)}`}</span>
        </p>
      </div>
    </div>
  );
}
