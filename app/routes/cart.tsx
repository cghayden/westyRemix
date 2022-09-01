import { Link } from 'remix';
import CartSummary from '~/components/CartSummary';

export default function CheckoutPage() {
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <CartSummary />
      <div className='text-center'>
        <Link
          className='bg-amber-800 text-amber-50 px-6 py-3 rounded'
          role='link'
          to='/checkout'
        >
          looks good! proceed to payment...
        </Link>
      </div>
    </div>
  );
}
