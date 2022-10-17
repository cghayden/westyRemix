import { Form } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { BillingDetails } from 'myTypes';
import { useState } from 'react';

export default function Index() {
  const elements = useElements();
  const stripe = useStripe();
  const [billingDetails, setBillingDetails] = useState({} as BillingDetails);

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
      <fieldset>
        <div className='FormRow radioStack'>
          <div className='label__radio-wrapper flex'>
            <div className='label__radio__input pr-3'>
              <input
                // className='appearance-none'
                type='radio'
                value='pickup'
                // active={billingDetails?.deliveryMethod === 'pickup'}
                checked={billingDetails?.deliveryMethod === 'pickup'}
                name='deliveryMethod'
                id='checkout_id_delivery_pickup'
                onChange={() => {
                  const newDetails: BillingDetails = {
                    ...billingDetails,
                    deliveryMethod: 'pickup',
                  };
                  setBillingDetails(newDetails);
                }}
              />
            </div>
            <label
              // active={billingDetails.deliveryMethod === 'Pickup' ? darkBlue : gray}
              htmlFor='checkout_id_delivery-pickup'
            >
              <span>free pickup</span>
            </label>
          </div>
          <div className='label__radio-wrapper flex'>
            <div className='label__radio__input pr-3'>
              <input
                // className='appearance-none'
                type='radio'
                value='shipping'
                // active={billingDetails?.deliveryMethod === 'pickup'}
                checked={billingDetails?.deliveryMethod === 'shipping'}
                name='deliveryMethod'
                id='checkout_id_delivery_pickup'
                onChange={() => {
                  const newDetails: BillingDetails = {
                    ...billingDetails,
                    deliveryMethod: 'shipping',
                  };
                  setBillingDetails(newDetails);
                }}
              />
            </div>
            <label
              // active={billingDetails.deliveryMethod === 'Pickup' ? darkBlue : gray}
              htmlFor='checkout_id_delivery-pickup'
            >
              <span>shipping</span>
            </label>
          </div>
        </div>
        <button>confirm payment</button>
      </fieldset>
      {billingDetails.deliveryMethod && (
        <div
        // initial={{ opacity: 0, height: 0 }}
        // animate={{ opacity: 1, height: 'auto' }}
        // exit={{ opacity: 0, height: 0 }}
        // transition={{ duration: 0.5 }}
        // style={{ overflow: 'hidden' }}
        >
          {billingDetails.deliveryMethod === 'shipping' && (
            <div
            // key={'shipping'}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5 }}
            >
              <legend className='form-heading'>ship to:</legend>
              <fieldset className='FormGroup'>
                <p>shipping deets inputs</p>
                {/* <ShippingAddressInput
                    billingDetails={billingDetails}
                    setShippingDetails={setShippingDetails}
                  /> */}
              </fieldset>
            </div>
          )}
          {billingDetails.deliveryMethod === 'pickup' && (
            <div
            // key={'pickup'}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{ duration: 0.5 }}
            >
              <legend className='form-heading'>pickup location</legend>
              <fieldset className='FormGroup'>
                <p>pickup deets inputs</p>
                {/* <PickupChoiceInput
                    billingDetails={billingDetails}
                    setShippingDetails={setShippingDetails}
                  /> */}
              </fieldset>
            </div>
          )}
        </div>
      )}
      <PaymentElement />
    </Form>
  );
}
