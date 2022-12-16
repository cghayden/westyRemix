import { useState } from 'react';
import { useCartItems } from '~/context/useCart';
import PlaySvg from '~/icons/PlaySvg';
import calcTotalPrice from '~/lib/calcCartTotal';
import formatMoney from '~/lib/formatMoney';

export default function CollapsibleCartSummary() {
  const [showSummary, toggleShowSummary] = useState(false);
  const cartItems = useCartItems();
  const subtotal = calcTotalPrice(cartItems);
  const shipping = subtotal < 4999 ? 1000 : 0;
  if (!cartItems.length) return <div>Your cart is empty</div>;
  return (
    <>
      <div className='flex p-2 w-full items-center '>
        <button
          className='self-start p-2'
          onClick={() => toggleShowSummary(!showSummary)}
        >
          <div className={`${showSummary ? 'rotate-90' : ''}`}>
            <PlaySvg />
          </div>
        </button>
        <p>{showSummary ? `Hide Summary` : `Show Summary`}</p>
        <p className='ml-auto'>{`Total Cost: $${formatMoney(
          subtotal + shipping
        )}`}</p>
      </div>
      <div>
        <p className='p-2'>
          {showSummary ? (
            <ul className='text-center '>
              {cartItems.map((cartItem) => (
                <li className='px-3' key={cartItem.name}>
                  <p className='flex'>
                    {`${cartItem.quantity} ${cartItem.name}, ${cartItem.grind}: `}
                    <span className='ml-auto'>
                      {`$${formatMoney(cartItem.price * cartItem.quantity)}`}
                    </span>
                  </p>
                </li>
              ))}
              <li className='px-3'>
                <p className='flex'>
                  Shipping:
                  <span className='ml-auto'>{`$${formatMoney(shipping)}`}</span>
                </p>
              </li>
            </ul>
          ) : null}
        </p>
      </div>
    </>
  );
}
