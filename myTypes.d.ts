export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: 'ground' | 'whole';
  variant_id: string;
  coffeeName: string;
}
