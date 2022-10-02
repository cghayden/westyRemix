import { Form } from '@remix-run/react';
import { PaymentElement } from '@stripe/react-stripe-js';

export default function payIndex() {
  return (
    <Form>
      <PaymentElement />
      <button>confirm payment</button>
    </Form>
  );
}
