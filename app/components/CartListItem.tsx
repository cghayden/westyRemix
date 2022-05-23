import { CartItem } from 'myTypes';
import {
  useChangeCartItemQuantity,
  useRemoveFromCart,
} from '~/context/useCart';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import TrashIcon from '~/icons/TrashIcon';
import formatMoney from '~/lib/formatMoney';

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  const changeCartItemQuantity = useChangeCartItemQuantity();
  const removeFromCart = useRemoveFromCart();
  return (
    <li className='p-4 border-b-2 border-slate-900'>
      <div className='mx-auto md:w-2/3'>
        {/* 1st row - flex - h3 and trash */}
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl'>{cartItem.coffeeName}</h3>
          <div>
            <button onClick={() => removeFromCart(cartItem)}>
              <TrashIcon />
            </button>
          </div>
        </div>
        {/* // flex row 2 - description */}
        <div className='flex pb-1'>
          <p className=''>{`${
            cartItem.grind === 'whole' ? 'whole bean' : 'ground'
          }`}</p>
        </div>
        {/* // flex row 3 - quantity changer (left) , total q & $ (right) */}
        <div className='flex justify-between'>
          <div className='rounded-full flex justify-evenly mr-8 bg-green-600 h-12 w-[150px] items-center'>
            <p>
              <button
                className='-mt-1 text-green-50'
                disabled={cartItem.quantity < 1}
                onClick={() =>
                  changeCartItemQuantity({
                    coffeeName: cartItem.coffeeName,
                    coffeeId: cartItem.coffeeId,
                    quantity: -1,
                    grind: cartItem.grind,
                    variant_id: cartItem.variant_id,
                    price: cartItem.price,
                  })
                }
              >
                <span className='text-3xl'>-</span>
              </button>
            </p>
            <p className='mx-4 text-2xl text-green-50'>{cartItem.quantity}</p>
            <p>
              <button
                className='-mt-1 text-green-50'
                onClick={() =>
                  changeCartItemQuantity({
                    coffeeName: cartItem.coffeeName,
                    coffeeId: cartItem.coffeeId,
                    quantity: 1,
                    grind: cartItem.grind,
                    variant_id: cartItem.variant_id,
                    price: cartItem.price,
                  })
                }
              >
                <span className='text-3xl'>+</span>
              </button>
            </p>
          </div>
          <p>
            {/* <span>{`${cartItem.quantity}`}</span>
            <span>&times; </span> */}
            <span>{`$${formatMoney(cartItem.price)} ea.`} </span>
            <span className='px-2'>=</span>
            <span className='text-xl'>
              {`$${formatMoney(cartItem.price * cartItem.quantity)} `}
            </span>
          </p>
        </div>
      </div>
    </li>
  );
}
