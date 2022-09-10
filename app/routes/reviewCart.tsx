import { Form, Link } from '@remix-run/react';
import CartSummary from '~/components/CartSummary';
import { useCartItems } from '~/context/useCart';

export default function CheckoutPage() {
  const cartItems = useCartItems();
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <CartSummary />
      <div className='text-center'>
        <Form method='post' action='/checkout'>
          <button type='submit' name='cart' value={JSON.stringify(cartItems)}>
            looks good!
          </button>
        </Form>
      </div>
    </div>
  );
}
