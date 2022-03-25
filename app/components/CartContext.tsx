import { createContext, FC, useContext, useState } from 'react';
import { Coffee } from 'sanityTypes';

interface AppContextInterface {
  cartContents: Coffee[];
  setCartContents?: () => void;
}

const initialState = {
  cartContents: [],
};

const CartContext = createContext<AppContextInterface>(initialState);

const CartStateProvider: FC = ({ children }: any) => {
  const [cartContents, setCartContents] = useState([]);
  return (
    <CartContext.Provider
      value={{
        cartContents,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// make a custom hook for accessing the cart local state
function useCart() {
  // We use a consumer here to access the local state
  const all = useContext(CartContext);
  return all;
}
export { CartStateProvider, CartContext, useCart };
