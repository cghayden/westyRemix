import { Form } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

export default function Index() {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/pay/success',
      },
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>confirm payment</button>
    </Form>
  );
}
