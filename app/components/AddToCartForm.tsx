import { CartItem } from 'myTypes';
import { useState } from 'react';
import { Form } from 'remix';
import { CartProvider, useAddToCart, useCartItems } from '~/context/useCart';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import type { Coffee } from '../../sanityTypes';
export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const [grind, setGrind] = useState<CartItem['grind']>('whole');
  const [quantity, setQuantity] = useState<number>(1);
  const addToCart = useAddToCart();
  const cartItems = useCartItems();
  console.log('cartItems', cartItems);
  return (
    <>
      <Form
        action='POST'
        onSubmit={(e) => {
          e.preventDefault();
          console.log('addToCart');
          addToCart({
            coffeeName: `${coffee.name}`,
            coffeeId: `${coffee._id}`,
            quantity,
            grind,
            variant_id: `${coffee.name + grind}`,
          });
        }}
        className='w-[300px] h-[400px] bg-slate-400 p-2'
      >
        <fieldset>
          <p>add {coffee.name} to cart</p>
          <div className='flex place-content-center my-4'>
            <label className='mr-5'>quantity:</label>
            <div className='flex flex-col'>
              <div className='flex'>
                <button
                  type='button'
                  disabled={quantity === 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <MinusSvg />
                </button>
                <p className='mx-5 text-xl'>{quantity}</p>
                <button
                  type='button'
                  disabled={quantity === coffee.stock}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <PlusSvg w={'18'} h={'18'} />
                </button>
              </div>
              <button className='text-xl bg-slate-50' type='submit'>
                Add {quantity} to Cart
              </button>
            </div>
          </div>
        </fieldset>
      </Form>
      <div>
        <p>current cart:</p>
        <p>
          {cartItems.map((item) => (
            <p key={item.variant_id}>
              {item.quantity} {item.coffeeName}
            </p>
          ))}
        </p>
      </div>
    </>
  );
}
