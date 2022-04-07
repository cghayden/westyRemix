import { CartItem } from 'myTypes';
import { createContext, useCallback, useContext, useReducer } from 'react';

type UseCartManagerResult = ReturnType<typeof useCartManager>;

export const CartContext = createContext<UseCartManagerResult>({
  cartItems: [],
  addCartItem: () => {},
});

type ActionType =
  | { type: 'ADD_TO_CART'; cartItem: CartItem }
  | { type: 'REMOVE_FROM_CART'; cartItem: CartItem };
// | { type: 'UPDATE_PRICE'; payload: State };

function useCartManager(initialCart: CartItem[]): {
  cartItems: CartItem[];
  addCartItem: (cartItem: CartItem) => void;
} {
  const [cartItems, dispatch] = useReducer(myCartReducerFunction, initialCart);
  const addCartItem = useCallback((cartItem: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', cartItem });
  }, []);
  return { cartItems, addCartItem };
}

const myCartReducerFunction = (state: CartItem[], action: ActionType) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log('add to cart');
      return [...state, action.cartItem];
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART');
      return state.filter(
        (currentCartItem) =>
          currentCartItem.variant_id !== action.cartItem.variant_id
      );
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

export const useCartItems = (): CartItem[] => {
  const { cartItems } = useContext(CartContext);
  return cartItems;
};

export const useAddToCart = (): UseCartManagerResult['addCartItem'] => {
  const { addCartItem } = useContext(CartContext);
  return addCartItem;
};
