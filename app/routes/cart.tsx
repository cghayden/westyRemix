import CartSummary from '~/components/CartSummary';

export default function CheckoutPage() {
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <CartSummary />
      <div className='text-center'>
        <form action='/create-checkout-session' method='POST'>
          <button type='submit'>Checkout</button>
        </form>
      </div>
    </div>
  );
}
