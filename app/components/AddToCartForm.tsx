import { useState } from 'react';
import { Form } from 'remix';
import { useAddToCart, useCartItems, useCartUtils } from '~/context/useCart';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import type { Coffee } from '../../sanityTypes';

export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const [grind, setGrind] = useState('whole');
  const [quantity, setQuantity] = useState<number>(1);
  const cartItems = useCartItems();
  const addToCart = useAddToCart();
  const { toggleIsCartOpen } = useCartUtils();

  const handleGrindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrind(e.target.value);
  };

  return (
    <>
      <Form
        action='POST'
        onSubmit={(e) => {
          e.preventDefault();
          addToCart({
            coffeeName: `${coffee.name}`,
            coffeeId: `${coffee._id}`,
            quantity,
            grind,
            variant_id: `${coffee._id + grind}`,
            price: coffee.price,
          });
          toggleIsCartOpen(true);
        }}
        className='w-[300px] h-[400px] bg-slate-400 p-2'
      >
        <fieldset>
          <button className='text-xl bg-slate-50' type='submit'>
            Add {quantity} to Cart
          </button>

          <div className='grindRadio'>
            <label htmlFor='whole' className=''>
              <input
                type='radio'
                id='whole'
                name='grind'
                value={'whole'}
                checked={grind === 'whole'}
                onChange={handleGrindChange}
              />
              Whole Bean
            </label>
            <label htmlFor='ground' className=''>
              <input
                type='radio'
                id='ground'
                name='grind'
                value={'ground'}
                checked={grind === 'ground'}
                onChange={handleGrindChange}
              />
              Ground
            </label>
          </div>

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
            </div>
          </div>
        </fieldset>
      </Form>
      <div>
        <p>current cart:</p>
        {JSON.stringify(cartItems)}
      </div>
    </>
  );
}
