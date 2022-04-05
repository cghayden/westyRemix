import { useState } from 'react';
import { Form } from 'remix';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import type { Coffee } from '../../sanityTypes';
import useCart from '../context/CartContext';
export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const [quantity, setQuantity] = useState<number>(1);
  const { products, addToCart } = useCart();
  console.log('addToCart', addToCart);
  console.log('products', products);

  return (
    <Form
      action='POST'
      onSubmit={(e) => {
        e.preventDefault();
        addToCart({ quantity, grind: 'whole', ...coffee });
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
  );
}
