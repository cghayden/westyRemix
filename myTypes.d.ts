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

export interface FulfillmentDetails {
  method: 'pickup' | 'shipping';
  pickupLocation?: string;
  shippingName: string;
  shippingAddressLine1: string;
  shippingAddressline2?: string;
  shippingCity: string;
  shippingState: string;
  shippingPostal_code: string;
}

export interface Customer {
  name: string;
  phone: string;
  email: string;
}

export interface OrderDetails {
  customer: Customer;
  fulfillment: FulfillmentDetails;
  cart: CartItem[];
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
