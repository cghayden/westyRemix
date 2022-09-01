import { useState } from 'react';
import { useCartItems } from '~/context/useCart';
import PlaySvg from '~/icons/PlaySvg';
import formatMoney from '~/lib/formatMoney';

export default function CheckoutPage() {
  const cartItems = useCartItems();
  const [showSummary, toggleShowSummary] = useState(false);
  return (
    <div className='flex p-2'>
      <button
        className='self-start p-2'
        onClick={() => toggleShowSummary(!showSummary)}
      >
        <div className={`${showSummary ? 'rotate-90' : ''}`}>
          <PlaySvg />
        </div>
      </button>
      <p className='p-2'>
        {showSummary ? (
          <ul className='text-center '>
            {cartItems.map((cartItem) => (
              <li key={cartItem.coffeeName}>
                {`${cartItem.quantity} ${cartItem.coffeeName}, ${
                  cartItem.grind
                }: $${formatMoney(cartItem.price * cartItem.quantity)}`}
              </li>
            ))}
            <li>Shipping: $?.00</li>
            <li>Total: ?.00</li>
          </ul>
        ) : (
          <span>Show Summary</span>
        )}
      </p>
    </div>
  );
}
