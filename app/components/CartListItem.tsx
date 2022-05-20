import { CartItem } from 'myTypes';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import TrashIcon from '~/icons/TrashIcon';

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className='p-4 border-b-2 border-slate-900'>
      <div className='mx-auto md:w-2/3'>
        {/* 1st row - flex - h3 and trash */}
        <div className='flex justify-between items-center'>
          <h3 className='text-2xl'>{cartItem.coffeeName}</h3>
          <div>
            <button>
              <TrashIcon />
            </button>
          </div>
        </div>
        {/* // flex row 2 - description */}
        <div className='flex py-2'>
          <p className=''>{`${
            cartItem.grind === 'whole' ? 'whole bean' : 'ground'
          }`}</p>
        </div>
        {/* // flex row 3 - quantity changer (left) , total q & $ (right) */}
        <div className='flex justify-between'>
          <div className='flex justify-evenly mr-8'>
            <button>
              <MinusSvg />{' '}
            </button>
            <p className='mx-4'>{cartItem.quantity}</p>
            <button>
              <PlusSvg w={'18'} h={'18'} />
            </button>
          </div>
          <p className=''>
            {/* <span>{`${cartItem.quantity}`}</span>
            <span>&times; </span> */}
            <span>{`$${cartItem.price} ea.`} </span>
            <span className='px-2'>=</span>
            <span className='text-xl'>$2x.xx</span>
          </p>
        </div>
      </div>
    </li>
  );
}
