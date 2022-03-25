import { Form } from 'remix';
import MinusSvg from '~/icons/MinusSvg';
import PlusSvg from '~/icons/PlusSvg';
import type { Coffee } from '../../sanityTypes';
import { useCart } from './CartContext';

export default function AddToCartForm({ coffee }: { coffee: Coffee }) {
  const { cartContents } = useCart();
  console.log('cartContents from form', cartContents);
  return (
    <Form action='POST' className='w-[300px] h-[400px] bg-slate-400 p-2'>
      <fieldset>
        <p>add {coffee.name} to cart</p>
        <div className='flex place-content-center my-4'>
          <label className='mr-5'>quantity:</label>
          <div className='flex'>
            <button
              type='button'
              // disabled={quantity === 1}
              // onClick={() => setQuantity((q) => (q -= 1))}
            >
              <MinusSvg />
            </button>
            <p className='mx-5 text-xl'>3</p>
            <button
              type='button'
              // disabled={quantity === stock}
              // onClick={() =>
              //   setQuantity((q) => {
              //     return (q += 1);
              //   })
              // }
            >
              <PlusSvg w={'18'} h={'18'} />
            </button>
          </div>
        </div>
      </fieldset>
    </Form>
  );
}
