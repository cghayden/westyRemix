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

export interface ShippingDetails {
  name: string;
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
}

export interface BillingDetails {
  name: string;
  shipping?: ShippingDetails;
  email: string;
  phone: string;
  deliveryMethod: string;
  pickupLocation?: string;
}
// export interface KeyedCartItem {
//   quantity: number;
//   price: number;
//   inStock: number;
// }

// export interface Cart {
//   contents: CartItem[];
//   total: number;
//   shipping: boolean; // fixed price shipping
// }
