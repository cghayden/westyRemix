import type { CartItem } from 'myTypes'

export default function checkAvailability(
  cartKeyedByName: Record<string, CartItem>,
  availableCoffee: string[]
) {
  const warningMessages = []
  for (const itemName in cartKeyedByName) {
    if (
      cartKeyedByName[itemName].inStock < cartKeyedByName[itemName].quantity
    ) {
      warningMessages.push(
        `There are only ${cartKeyedByName[itemName].inStock} ${itemName} in stock`
      )
    }
    if (!availableCoffee.includes(cartKeyedByName[itemName].name)) {
      warningMessages.push(`${itemName} is no longer available`)
    }
  }
  return warningMessages
}
