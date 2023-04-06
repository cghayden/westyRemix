export interface CartItem {
  _id: string
  coffeeId: string
  quantity: number
  grind: string
  variant_id: string
  name: string
  price: number
  inStock: number
  insufficientStock?: boolean
  outOfStock?: boolean
  unavailable?: boolean
}

export interface FulfillmentDetails {
  method: 'pickup' | 'shipping'
  pickupLocation?: string
  shippingName: string
  shippingAddressLine1: string
  shippingAddressLine2?: string
  shippingCity: string
  shippingState: string
  shippingPostal_code: string
  shippingCost: number
}

export interface CustomerDetails {
  customerName: string
  customerEmail: string
  customerPhone: string
}

export interface OrderDetails {
  customerDetails: CustomerDetails
  fulfillmentDetails: FulfillmentDetails
  cart: CartItem[]
  total: number
  id: string | null
}

export interface SanityOrder {
  name: string
  email: string
  phone: string
  number: string
  total: string
  orderItems: string
  stripe_id: string
  deliveryMethod: string
  pickupLocation: string
  shippingName: string
  shippingAddressLine1: string
  shippingAddressLine2: string
  shippingCity: string
  shippingState: string
  shippingZip: string
  customerComments: string
  // shippingCost: number
  env
}

export type HSL_Color = {
  _type?: string
  h: number
  s: number
  l: number
  a?: number
}
export type HSV_Color = {
  _type: string
  h: number
  s: number
  v: number
  a: number
}
export type RGB_Color = {
  _type: string
  r: number
  g: number
  b: number
  a: number
}

export type SanityColor = {
  alpha: number
  hex: string
  hsl: HSL_Color
}

export type UserColors = {
  _id: string
  backgroundColor: SanityColor
  pageTextColor: SanityColor
  productTileBackgroundColor: SanityColor
  productTileTextColor: SanityColor
  bgComplement: SanityColor
  bgContrast: string
  tileContrast: string
}
