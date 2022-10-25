import { Form, useSearchParams, useTransition } from '@remix-run/react';
import CartSummary from '~/components/CartSummary';
import { useCartItems } from '~/context/useCart';

export default function CheckoutPage() {
  const transition = useTransition();
  console.log('transition', transition);

  const cartItems = useCartItems();
  const [searchParams] = useSearchParams();
  const warnings = searchParams.getAll('warnings');

  // review cart, and on confirmation, send cart to '/checkout' action via form submission
  // if the action finds errors of price or stock, it will redirect back to this page with warnings in the url query string
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <CartSummary />
      <div className='text-center'>
        <Form method='post' action='/pay'>
          {warnings && (
            <div>
              <ul>
                {warnings.map((warning, i) => (
                  <li key={i}>{warning}</li>
                ))}
              </ul>
            </div>
          )}
          <button type='submit' name='cart' value={JSON.stringify(cartItems)}>
            {transition.state === 'submitting'
              ? 'calculating...'
              : 'looks good!'}{' '}
          </button>
        </Form>
      </div>
    </div>
  );
}
