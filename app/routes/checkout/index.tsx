import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Form, useSubmit } from '@remix-run/react';
import { useState } from 'react';
import { useCartItems } from '~/context/useCart';
import PlaySvg from '~/icons/PlaySvg';
import formatMoney from '~/lib/formatMoney';

export default function CheckoutPage() {
  const [showSummary, toggleShowSummary] = useState(false);
  const cart = useCartItems();
  console.log('cart', cart);

  const elements = useElements();
  const stripe = useStripe();
  const submit = useSubmit();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // await
  //   await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       return_url: 'http://localhost:3000/checkout/success',
  //     },
  //   });
  // };
  return (
    <>
      <div className='flex p-2 w-full items-center '>
        <button
          className='self-start p-2'
          onClick={() => toggleShowSummary(!showSummary)}
        >
          <div className={`${showSummary ? 'rotate-90' : ''}`}>
            <PlaySvg />
          </div>
        </button>
        <p>{showSummary ? `Hide Summary` : `Show Summary`}</p>
        <p className='ml-auto'>T?.00</p>
      </div>
      <div>
        <p className='p-2'>
          {showSummary ? (
            <ul className='text-center '>
              {cartItems.map((cartItem) => (
                <li className='px-3' key={cartItem.coffeeName}>
                  <p className='flex'>
                    {`${cartItem.quantity} ${cartItem.coffeeName}, ${cartItem.grind}: `}
                    <span className='ml-auto'>
                      {`$${formatMoney(cartItem.price * cartItem.quantity)}`}
                    </span>
                  </p>
                </li>
              ))}
              <li className='px-3'>
                <p className='flex'>
                  Shipping:
                  <span className='ml-auto'>$?.00</span>
                </p>
              </li>
            </ul>
          ) : null}
        </p>
      </div>
      <Form>
        Checkout Form
        <PaymentElement />
        <div>
          <button>Pay</button>
        </div>
      </Form>
    </>
  );
}
