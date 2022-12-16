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
  const [alert, setAlert] = useState<string | null>();
  const [grind, setGrind] = useState('whole');
  const [desiredQuantity, setDesiredQuantity] = useState<number>(1);
  const cartItems = useCartItems();
  const changeCartItemQuantity = useChangeCartItemQuantity();
  const { toggleIsCartOpen } = useCartUtils();
  const totalCartQuantity = getTotalQuantityInCart(coffee._id, cartItems);

  const handleGrindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrind(e.target.value);
  };

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
                onClick={() => {
                  if (
                    totalCartQuantity === coffee.stock ||
                    totalCartQuantity + desiredQuantity === coffee.stock
                  ) {
                    setAlert(
                      `you have ${totalCartQuantity} ${coffee.name} in your cart.  There are only ${coffee.stock} available`
                    );
                    setTimeout(() => {
                      setAlert(null);
                    }, 2000);
                  } else {
                    setDesiredQuantity(desiredQuantity + 1);
                  }
                }}
              >
                <PlusSvg w={'18'} h={'18'} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            disabled={
              totalCartQuantity === coffee.stock ||
              totalCartQuantity + desiredQuantity > coffee.stock
            }
            className='text-lg bg-slate-600 text-slate-50 rounded-full px-5 py-2 mt-2 disabled:bg-slate-300 disabled:text-slate:100'
            onClick={(e) => {
              e.preventDefault();
              setDesiredQuantity(1);
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
        {alert && <p>{alert}</p>}
      </div>
    </>
  );
}
