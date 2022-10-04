import { CartItem } from 'myTypes';
import {
  useChangeCartItemQuantity,
  useRemoveFromCart,
} from '~/context/useCart';
import TrashIcon from '~/icons/TrashIcon';
import formatMoney from '~/lib/formatMoney';

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  const changeCartItemQuantity = useChangeCartItemQuantity();
  const removeFromCart = useRemoveFromCart();
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
        <div className='flex justify-between items-center'>
          <div className='rounded-full flex justify-evenly mr-8 bg-green-600 h-9 w-[100px] items-center'>
            <p>
              <button
                className='-mt-1 text-green-50'
                disabled={cartItem.quantity < 1}
                onClick={() => {
                  if (cartItem.quantity == 1) {
                    if (confirm(`remove ${cartItem.name} from cart?`)) {
                      removeFromCart(cartItem);
                      return;
                    }
                  }
                  changeCartItemQuantity({
                    name: cartItem.name,
                    coffeeId: cartItem.coffeeId,
                    quantity: -1,
                    grind: cartItem.grind,
                    variant_id: cartItem.variant_id,
                    price: cartItem.price,
                  });
                }}
              >
                <span className='text-2xl'>-</span>
              </button>
            </p>
            <p className='mx-4 text-xl text-green-50'>{cartItem.quantity}</p>
            <p>
              <button
                className='-mt-1 text-green-50'
                onClick={() =>
                  changeCartItemQuantity({
                    name: cartItem.name,
                    coffeeId: cartItem.coffeeId,
                    quantity: 1,
                    grind: cartItem.grind,
                    variant_id: cartItem.variant_id,
                    price: cartItem.price,
                  })
                }
              >
                <span className='text-2xl'>+</span>
              </button>
            </p>
          </div>
          <p className='text-xl'>
            {`$${formatMoney(cartItem.price * cartItem.quantity)} `}
          </p>
        </div>
      </div>
    </li>
  );
}
