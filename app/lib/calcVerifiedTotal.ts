import type { CartItem } from 'myTypes'

export default function calcVerifiedTotal(
  obj: Record<string, CartItem>
): number {
  //stripe paymentIntent wants the amount to be in smallest currency unit (i.e. cents)
  let total = 0
  for (const item in obj) {
    const itemTotal = obj[item].price * obj[item].quantity
    total += itemTotal
  }
  return total
}
