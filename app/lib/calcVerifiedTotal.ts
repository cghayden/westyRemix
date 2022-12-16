import { CartItem } from 'myTypes';

export default function calcVerifiedTotal(
  obj: Record<string, CartItem>
): number {
  //stripe paymentIntent wants the amount to be in smallest currency unit (i.e. cents)
  let total = 0;
  for (const item in obj) {
    const itemTotal = obj[item].price * obj[item].quantity;
    total += itemTotal;
  }
  // add $10 shipping if less than 5000
  //moved into separate function to call in action, in able to attach shipping cost to paymentIntent
  // if (total < 4999) {
  //   total += 1000;
  // }
  return total;
}
