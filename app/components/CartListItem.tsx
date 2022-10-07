import { CartItem } from 'myTypes';
import TrashIcon from '~/icons/TrashIcon';
import formatMoney from '~/lib/formatMoney';
import AdjustQuantityButtons from './AdjustQuantityButtons';

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className='p-4 border-b-2'>
      <div className='mx-auto md:w-2/3'>
        <div className='flex justify-between items-center'>
          <h3 className='text-xl'>{cartItem.name}</h3>
          {/* <div>
            <button onClick={() => removeFromCart(cartItem)}>
              <TrashIcon />
            </button>
          </div> */}
        </div>
        <div className='flex'>
          <div>
            <p className='text-sm mr-8 mb-2 text-slate-600'>{`${
              cartItem.grind === 'whole' ? 'whole bean' : 'ground'
            }`}</p>
          </div>
          <div className='pb-1 text-slate-600'>
            <p className='text-sm'>{`$${formatMoney(cartItem.price)}`} </p>
          </div>
        </div>
        <AdjustQuantityButtons cartItem={cartItem} />
      </div>
    </li>
  );
}
