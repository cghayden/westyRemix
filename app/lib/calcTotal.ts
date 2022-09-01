import { CartItem } from 'myTypes';

export default function calcTotalPrice(cartItems: CartItem[]) {
  return cartItems.reduce((tally, cartItem) => {
    //   if (!cartItem.) return tally; // products can be deleted, but they could still be in your cart
    return tally + cartItem.quantity * cartItem.price;
  }, 0);
}
