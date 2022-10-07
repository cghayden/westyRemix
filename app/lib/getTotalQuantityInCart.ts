import { CartItem } from 'myTypes';

export default function getTotalQuantityInCart(
  coffeeId: string,
  cartItems: CartItem[]
) {
  const totalQ = cartItems.reduce((tally, cartItem) => {
    if (coffeeId === cartItem.coffeeId) {
      return tally + cartItem.quantity;
    } else return tally;
  }, 0);
  return totalQ;
}
