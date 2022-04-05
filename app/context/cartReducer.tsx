import { Coffee } from 'sanityTypes';

export const initialState = {
  total: 0,
  products: [],
};

type CartItem = Coffee & {
  quantity: number;
  grind: 'ground' | 'whole';
};

interface State {
  total: number;
  products: CartItem[];
}

type Action =
  | { type: 'ADD_TO_CART'; payload: State }
  | { type: 'REMOVE_FROM_CART'; payload: State }
  | { type: 'UPDATE_PRICE'; payload: State };

const cartReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TO_CART':
      console.log('add to cart', payload);
      return {
        ...state,
        products: payload.products,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_FROM_CART', payload);

      return {
        ...state,
        products: payload.products,
      };
    case 'UPDATE_PRICE':
      console.log('UPDATE_PRICE', payload);

      return {
        ...state,
        total: payload.total,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
  }
};
export default cartReducer;
