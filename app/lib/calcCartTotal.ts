import { CartItem } from 'myTypes';

export default function calcTotalPrice(cartItems: CartItem[]) {
  return cartItems.reduce((tally, cartItem) => {
    return tally + cartItem.quantity * cartItem.price;
  }, 0);
}
