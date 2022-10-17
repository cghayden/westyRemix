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
    if (!stripe || !elements) return null;
    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: 'http://localhost:3000/success',
          shipping: {
            address: {
              line1: '63 Alden St',
              city: 'Foxboro',
              state: 'MA',
              postal_code: '02035',
            },
            name: 'Corey Hayden',
          },
          receipt_email: 'cghayden@gmail.com',
        },
      })
      .then(function (result) {
        if (result.error) {
          //show error message in UI
          console.log(result.error);
        }
      });
  };
  return (
    <Form onSubmit={handleSubmit} method='post'>
      <PaymentElement />
      <button>confirm payment</button>
    </Form>
  );
}
