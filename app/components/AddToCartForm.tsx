import { useState } from 'react';
import { Form } from '@remix-run/react';
import {
  useChangeCartItemQuantity,
  useCartItems,
  useCartUtils,
} from '~/context/useCart';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import type { Coffee } from '../../sanityTypes';
import getTotalQuantityInCart from '~/lib/getTotalQuantityInCart';

export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const [grind, setGrind] = useState('whole');
  const [desiredQuantity, setDesiredQuantity] = useState<number>(1);
  const cartItems = useCartItems();
  const changeCartItemQuantity = useChangeCartItemQuantity();
  const { toggleIsCartOpen } = useCartUtils();

  const handleGrindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrind(e.target.value);
  };
  const totalCartQuantity = getTotalQuantityInCart(coffee._id, cartItems);

  return (
    <>
      <div className=' label__Formcontainer p-3 flex flex-col justify-evenly items-center'>
        <div className='grindRadio flex flex-col'>
          <label htmlFor='whole' className='py-2'>
            <input
              type='radio'
              id='whole'
              name='grind'
              value={'whole'}
              checked={grind === 'whole'}
              onChange={handleGrindChange}
              className='mr-1'
            />
            Whole Bean
          </label>
          <label htmlFor='ground' className='py-2'>
            <input
              type='radio'
              id='ground'
              name='grind'
              value={'ground'}
              checked={grind === 'ground'}
              onChange={handleGrindChange}
              className='mr-1'
            />
            Ground
          </label>
        </div>

        <div className='flex place-content-center my-2'>
          <div className='flex flex-col'>
            <div className='flex'>
              <button
                type='button'
                disabled={desiredQuantity === 1}
                onClick={() => setDesiredQuantity(desiredQuantity - 1)}
              >
                <MinusSvg />
              </button>
              <p className='mx-5 text-xl'>{desiredQuantity}</p>
              <button
                type='button'
                disabled={
                  totalCartQuantity + desiredQuantity === coffee.stock ||
                  totalCartQuantity + desiredQuantity > coffee.stock
                }
                onClick={() => setDesiredQuantity(desiredQuantity + 1)}
              >
                <PlusSvg w={'18'} h={'18'} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            disabled={totalCartQuantity + desiredQuantity > coffee.stock}
            className='text-lg bg-slate-600 text-slate-50 rounded-full px-5 py-2 mt-2'
            onClick={(e) => {
              e.preventDefault();
              changeCartItemQuantity({
                name: `${coffee.name}`,
                coffeeId: `${coffee._id}`,
                quantity: desiredQuantity,
                grind,
                variant_id: `${coffee._id + grind}`,
                price: coffee.price,
                inStock: coffee.stock,
              });
              toggleIsCartOpen(true);
            }}
          >
            Add {desiredQuantity} to Cart
          </button>
        </div>
        {totalCartQuantity > 0 && (
          <p>
            {totalCartQuantity} {coffee.name} in your cart
          </p>
        )}
        {totalCartQuantity + desiredQuantity === coffee.stock ||
        totalCartQuantity + desiredQuantity > coffee.stock ? (
          <p>there are only {coffee.stock} in stock</p>
        ) : null}
      </div>
    </>
  );
}
