import type { CartItem } from 'myTypes'
import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from 'react'

type UseCartManagerResult = ReturnType<typeof useCartManager>

export const CartContext = createContext<UseCartManagerResult>({
  cartItems: [],
  changeCartItemQuantity: () => {},
  removeCartItem: () => {},
  isCartOpen: false,
  toggleIsCartOpen: () => {},
})

type ActionType =
  | { type: 'CHANGE_CART_QUANTITY'; cartItem: CartItem }
  | { type: 'REMOVE_FROM_CART'; cartItem: CartItem }

function useCartManager(initialCart: CartItem[]): {
  cartItems: CartItem[]
  changeCartItemQuantity: (cartItem: CartItem) => void
  removeCartItem: (cartItem: CartItem) => void
  isCartOpen: boolean
  toggleIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>
} {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, dispatch] = useReducer(myCartReducerFunction, initialCart)
  const changeCartItemQuantity = useCallback((cartItem: CartItem) => {
    dispatch({ type: 'CHANGE_CART_QUANTITY', cartItem })
  }, [])
  const removeCartItem = useCallback((cartItem: CartItem) => {
    dispatch({ type: 'REMOVE_FROM_CART', cartItem })
  }, [])
  return {
    cartItems,
    changeCartItemQuantity,
    removeCartItem,
    isCartOpen,
    toggleIsCartOpen: setIsCartOpen,
  }
}

const myCartReducerFunction = (
  cartItemsState: CartItem[],
  action: ActionType
) => {
  const cartItemIndex = cartItemsState.findIndex(
    (cartItem) => cartItem.variant_id === action.cartItem.variant_id
  )
  switch (action.type) {
    case 'CHANGE_CART_QUANTITY':
      if (cartItemIndex === -1) {
        return [...cartItemsState, action.cartItem]
      }
      if (cartItemIndex > -1) {
        //quantity will be positive to increase, or -1 to decrease number in cart
        const updatedCart = [...cartItemsState]

        const updatedItem = {
          ...updatedCart[cartItemIndex],
          quantity:
            updatedCart[cartItemIndex].quantity + action.cartItem.quantity,
        }
        updatedCart[cartItemIndex] = updatedItem
        return updatedCart
      }
    case 'REMOVE_FROM_CART':
      const cartCopy = [...cartItemsState]
      cartCopy.splice(cartItemIndex, 1)
      return cartCopy
    default:
      throw new Error(`No case for action type found in cartReducer.`)
  }
}

export const CartProvider = ({
  initialCart,
  children,
}: {
  initialCart: CartItem[]
  children: React.ReactNode
}) => {
  return (
    <CartContext.Provider value={useCartManager(initialCart)}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartUtils = () => {
  const { isCartOpen, toggleIsCartOpen } = useContext(CartContext)
  return { isCartOpen, toggleIsCartOpen }
}

export const useCartItems = (): CartItem[] => {
  const { cartItems } = useContext(CartContext)
  return cartItems
}

export const useChangeCartItemQuantity =
  (): UseCartManagerResult['changeCartItemQuantity'] => {
    const { changeCartItemQuantity } = useContext(CartContext)
    return changeCartItemQuantity
  }
export const useRemoveFromCart = (): UseCartManagerResult['removeCartItem'] => {
  const { removeCartItem } = useContext(CartContext)
  return removeCartItem
}
