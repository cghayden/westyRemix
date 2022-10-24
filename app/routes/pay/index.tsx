import { useState } from 'react';
import { Form } from '@remix-run/react';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { BillingDetails } from 'myTypes';
import ShippingDetailsInputs from '~/components/ShippingDetailsInputs';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import CollapsibleCartSummary from '~/components/CollapsibleCartSummary';
import FieldsetGroup from '~/components/styledContainers/FieldsetGroup';
import InputRow from '~/components/styledContainers/InputRow';
import StoreFrontIcon from '~/icons/StoreFrontIcon';
import ShippingTruckIcon from '~/icons/ShippingTruckIcon';

import styles from '~/styles/formStyles.css';
import PickupChoiceInputs from '~/components/PickupChoiceInputs';
import { AnimatePresence, motion } from 'framer-motion';
// styles is now something like /build/global-AE33KB2.css

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  const elements = useElements();
  const stripe = useStripe();
  const [billingDetails, setBillingDetails] = useState({
    deliveryMethod: 'pickup',
  } as BillingDetails);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return null;

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:3000/success',
        shipping: {
          address: {
            line1: billingDetails?.shipping?.line1,
            line2: billingDetails?.shipping?.line2,
            city: billingDetails?.shipping?.city,
            state: billingDetails?.shipping?.state,
            postal_code: billingDetails.shipping?.postal_code,
          },
          name: 'Corey Hayden',
        },
        receipt_email: 'cghayden@gmail.com',
      },
    });
  };
  return (
    <ContentContainer>
      <CollapsibleCartSummary />
      <Form onSubmit={handleSubmit} method='post'>
        <FieldsetGroup>
          <InputRow>
            <div className='label__radio__input pr-3'>
              <input
                className='input-radio'
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
              className={`flex flex-col cursor-pointer ${
                billingDetails.deliveryMethod === 'pickup'
                  ? 'text-blue-800'
                  : 'text-gray-700'
              }`}
              htmlFor='checkout_id_delivery_pickup'
            >
              <span>
                <StoreFrontIcon />
                free pickup
              </span>
            </label>
          </InputRow>
          <InputRow>
            <div className='label__radio__input pr-3'>
              <input
                className='input-radio'
                type='radio'
                value='shipping'
                // active={billingDetails?.deliveryMethod === 'pickup'}
                checked={billingDetails?.deliveryMethod === 'shipping'}
                name='deliveryMethod'
                id='checkout_id_delivery_shipping'
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
              className={`flex flex-col cursor-pointer ${
                billingDetails.deliveryMethod === 'shipping'
                  ? 'text-blue-800'
                  : 'text-gray-700'
              }`}
              htmlFor='checkout_id_delivery_shipping'
            >
              <span>
                <ShippingTruckIcon />
                $10 shipping
              </span>
              <span className='text-sm'>free on orders over $50</span>
            </label>
          </InputRow>
          {/* </div> */}
        </FieldsetGroup>

        <AnimatePresence exitBeforeEnter>
          {billingDetails.deliveryMethod === 'shipping' && (
            <motion.div
              key={'shipping'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <legend className='text-sm text-blue-800'>ship to:</legend>
              <ShippingDetailsInputs
                billingDetails={billingDetails}
                setBillingDetails={setBillingDetails}
              />
            </motion.div>
          )}
          {billingDetails.deliveryMethod === 'pickup' && (
            <motion.div
              key={'pickup'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <legend className='text-sm text-blue-800'>pickup location</legend>
              <PickupChoiceInputs
                billingDetails={billingDetails}
                setBillingDetails={setBillingDetails}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <PaymentElement />
        <button className='bg-amber-700 text-amber-50 px-4 py-3'>
          confirm payment
        </button>
      </Form>
    </ContentContainer>
  );
}
