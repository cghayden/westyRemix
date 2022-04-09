import { CartItem } from 'myTypes';

export default function CartListItem({ cartItem }: { cartItem: CartItem }) {
  return (
    <li className='py-4 border-b-2 border-slate-900'>
      <h3>{cartItem.coffeeName}</h3>
      <p className=''>{`${cartItem.grind}`}</p>
      <p className=''>
        <span>{`${cartItem.quantity}`}</span>
        <span>&times; </span>
        {/* <span>{`$${formatMoney(cartItem.unitPrice)} ea.`} </span> */}
        {/* <span>= </span> */}
        {/* <span>${totalCost}</span> */}
      </p>
    </li>
  );
}
