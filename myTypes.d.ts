import { Coffee } from 'sanityTypes';

type CreateCustomCoffeeType<Type> = {
  [Property in keyof Type as Exclude<Property, '_type'>]: Type[Property];
};

type MyCoffee = Omit<
  Coffee,
  '_type' | '_createdAt' | '_key' | '_ref' | '_rev' | '_updatedAt' | 'slug' | ''
>;

export interface CartItem {
  coffeeId: string;
  quantity: number;
  grind: 'ground' | 'whole';
  variant_id: string;
  coffeeName: string;
}
