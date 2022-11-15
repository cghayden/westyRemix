import { Form } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import CollapsibleCartSummary from '~/components/CollapsibleCartSummary';
import { useCartItems } from '~/context/useCart';

export default function Index() {
  const cartItems = useCartItems();
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return null;

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/writeOrder',
      },
    });
  };

  if (!cartItems.length) {
    return (
      <ContentContainer>
        Oops! There was an error retrieving your cart, please continue shopping.
      </ContentContainer>
    );
  }

  // TODO - pending UI
  return (
    <ContentContainer>
      <CollapsibleCartSummary />
      <Form onSubmit={handleSubmit}>
        <PaymentElement />
        <button className='bg-amber-700 text-amber-50 px-4 py-3'>
          confirm
        </button>
      </Form>
    </ContentContainer>
  );
}
