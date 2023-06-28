import { useState } from 'react'
import {
  useChangeCartItemQuantity,
  useCartItems,
  useCartUtils,
} from '~/context/useCart'
import MinusSvg from '~/icons/MinusSvg'
import PlusSvg from '~/icons/PlusSvg'
import type { Coffee } from '../../sanityTypes'
import getTotalQuantityInCart from '~/lib/getTotalQuantityInCart'

export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const [alert, setAlert] = useState<string | null>()
  const [grind, setGrind] = useState('whole')
  const [desiredQuantity, setDesiredQuantity] = useState<number>(1)
  const cartItems = useCartItems()
  const changeCartItemQuantity = useChangeCartItemQuantity()
  const { toggleIsCartOpen } = useCartUtils()
  const totalCartQuantity = getTotalQuantityInCart(coffee._id, cartItems)

  const handleGrindChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGrind(e.target.value)
  }

  return (
    <>
      <div className=' label__Formcontainer p-3 pt-0 flex flex-col justify-evenly items-center'>
        <div className='grindRadio flex flex-col items-start'>
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
        {/* coffee size is sourced from sanity, currently the only options are '12 oz.' or '1 pound'.  
        The client currently sells 1 pound bags but is considering switching to 12 oz bags, so I set this up to be a dynamic value, set in sanity by the client, with a default value of 1 pound.
        All coffee offerings are currently only available in one size, and all are offered only in that chosen size, so sizes do not need to be accounted for in the shopping cart. 
        This p tag is currently the only use of coffee.size, as display to the consumer of what size bags the coffee is packaged in.
        */}

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
                    )
                    setTimeout(() => {
                      setAlert(null)
                    }, 2000)
                  } else {
                    setDesiredQuantity(desiredQuantity + 1)
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
              e.preventDefault()
              changeCartItemQuantity({
                name: `${coffee.name}`,
                coffeeId: `${coffee._id}`,
                quantity: desiredQuantity,
                grind,
                variant_id: `${coffee._id + grind}`,
                price: coffee.price,
                inStock: coffee.stock,
                _id: `${coffee._id}`,
              })
              toggleIsCartOpen(true)
            }}
          >
            Add {desiredQuantity} to Cart
          </button>
        </div>
        {alert && <p>{alert}</p>}
      </div>
    </>
  )
}
