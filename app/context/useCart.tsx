import { CartItem } from 'myTypes';
import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from 'react';

type UseCartManagerResult = ReturnType<typeof useCartManager>;

export const CartContext = createContext<UseCartManagerResult>({
  cartItems: [],
  alterCartItemQuantity: () => {},
  removeCartItem: () => {},
  isCartOpen: false,
  toggleIsCartOpen: () => {},
});

type ActionType =
  | { type: 'CHANGE_CART_QUANTITY'; cartItem: CartItem }
  | { type: 'REMOVE_FROM_CART'; cartItem: CartItem };
// | { type: 'UPDATE_PRICE'; payload: State };

function useCartManager(initialCart: CartItem[]): {
  cartItems: CartItem[];
  alterCartItemQuantity: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  isCartOpen: boolean;
  toggleIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
} {
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [cartItems, dispatch] = useReducer(myCartReducerFunction, initialCart);
  const alterCartItemQuantity = useCallback((cartItem: CartItem) => {
    dispatch({ type: 'CHANGE_CART_QUANTITY', cartItem });
  }, []);
  const removeCartItem = useCallback((cartItem: CartItem) => {
    dispatch({ type: 'REMOVE_FROM_CART', cartItem });
  }, []);
  return {
    cartItems,
    alterCartItemQuantity,
    removeCartItem,
    isCartOpen,
    toggleIsCartOpen: setIsCartOpen,
  };
}

const myCartReducerFunction = (
  cartItemsState: CartItem[],
  action: ActionType
) => {
  const cartItemIndex = cartItemsState.findIndex(
    (cartItem) =>
      cartItem.coffeeName === action.cartItem.coffeeName &&
      cartItem.grind === action.cartItem.grind
  );
  switch (action.type) {
    case 'CHANGE_CART_QUANTITY':
      if (cartItemIndex === -1) {
        return [...cartItemsState, action.cartItem];
      }
      if (cartItemIndex > -1) {
        const updatedCart = [...cartItemsState];
        //quantity will be positive to increase, or -1 to decrease number in cart
        cartItemsState[cartItemIndex].quantity += action.cartItem.quantity;
        return updatedCart;
      }
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART');
      const cartCopy = [...cartItemsState];
      cartCopy.splice(cartItemIndex, 1);
      return cartCopy;
    // case 'UPDATE_PRICE':
    //   console.log('UPDATE_PRICE', payload);

    //   return {
    //     ...state,
    //     total: payload.total,
    //   };
    default:
      throw new Error(`No case for action type found in cartReducer.`);
  }
};

export const CartProvider = ({
  initialCart,
  children,
}: {
  initialCart: CartItem[];
  children: React.ReactNode;
}) => {
  return (
    <CartContext.Provider value={useCartManager(initialCart)}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartUtils = () => {
  const { isCartOpen, toggleIsCartOpen } = useContext(CartContext);
  return { isCartOpen, toggleIsCartOpen };
};

export const useCartItems = (): CartItem[] => {
  const { cartItems } = useContext(CartContext);
  return cartItems;
};

export const useAlterCartItemQuantity =
  (): UseCartManagerResult['alterCartItemQuantity'] => {
    const { alterCartItemQuantity } = useContext(CartContext);
    return alterCartItemQuantity;
  };
export const useRemoveFromCart = (): UseCartManagerResult['removeCartItem'] => {
  const { removeCartItem } = useContext(CartContext);
  return removeCartItem;
};
