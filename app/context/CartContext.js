import { createContext, useContext, useReducer } from 'react';
import cartReducer, { initialState } from './cartReducer';

// we'll need to create three functions inside of the provider: one for each action type we added in our switch statement inside of the reducer. Let's start with the ADDTOCART action.

const CartContext = createContext(initialState);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
    updatePrice(updatedCart);
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedCart);
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
    dispatch({
      type: 'UPDATE_PRICE',
      payload: {
        total,
      },
    });
  };
  return (
    <CartContext.Provider
      value={{
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCart must be used within CartContext');
  }

  return context;
};
export { CartProvider };
export default useCart;
