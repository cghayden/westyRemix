import type { CartItem } from 'myTypes'

export default function reduceCartByName(cart: CartItem[]) {
  const keyedCart = cart.reduce((acc, cartItem) => {
    let key: string = cartItem.name
    if (acc[key]) {
      acc[key].quantity = acc[key].quantity + cartItem.quantity
      return acc
    } else
      return {
        ...acc,
        [key]: {
          ...cartItem,
        },
      }
  }, {} as Record<string, CartItem>)
  return keyedCart
}
