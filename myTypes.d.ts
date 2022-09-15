export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: string;
  variant_id: string;
  name: string;
  price: number;
  inStock: number;
  insufficientStock?: boolean;
  outOfStock?: boolean;
  unavailable?: boolean;
}

export interface KeyedCartItem {
  quantity: number;
  price: number;
  inStock: number;
}

// export interface Cart {
//   contents: CartItem[];
//   total: number;
//   shipping: boolean; // fixed price shipping
// }
