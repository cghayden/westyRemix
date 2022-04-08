export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: 'whole' | 'ground';
  variant_id: string;
  coffeeName: string;
}
