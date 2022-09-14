import { KeyedCartItem } from 'myTypes';

export default function calcVerifiedTotal(
  obj: Record<string, KeyedCartItem>
): number {
  //stripe paymentIntent wants the amount to be in smallest currency unit (i.e. cents)
  let total = 0;
  for (const item in obj) {
    const itemTotal = obj[item].price * obj[item].quantity;
    total += itemTotal;
  }
  // add $10 shipping if less than 5000
  if (total < 4999) {
    total += 1000;
  }
  return total;
}
