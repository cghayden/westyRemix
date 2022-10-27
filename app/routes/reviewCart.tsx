import { useState } from 'react';
import {
  Form,
  useSearchParams,
  useSubmit,
  useTransition,
} from '@remix-run/react';
import { motion, AnimatePresence } from 'framer-motion';
import { BillingDetails } from 'myTypes';
import CartSummary from '~/components/CartSummary';
import ShippingDetailsInputs from '~/components/ShippingDetailsInputs';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import { useCartItems } from '~/context/useCart';
import FieldsetGroup from '~/components/styledContainers/FieldsetGroup';
import InputRow from '~/components/styledContainers/InputRow';
import StoreFrontIcon from '~/icons/StoreFrontIcon';
import ShippingTruckIcon from '~/icons/ShippingTruckIcon';
import PickupChoiceInputs from '~/components/PickupChoiceInputs';
import styles from '~/styles/formStyles.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
export default function CheckoutPage() {
  const transition = useTransition();
  // console.log('transition', transition);
  const submit = useSubmit();

  const [billingDetails, setBillingDetails] = useState({
    deliveryMethod: 'pickup',
    pickupLocation: 'daniels',
    shipping: {},
  } as BillingDetails);

  const cartItems = useCartItems();
  const [searchParams] = useSearchParams();
  const warnings = searchParams.getAll('warnings');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.set('billingDetails', JSON.stringify(billingDetails));
    formData.set('cart', JSON.stringify(cartItems));
    submit(formData, { method: 'post', action: '/pay' });
  };

  // review cart, and on confirmation, send cart to '/checkout' action via form submission
  // if the action finds errors of price or stock, it will redirect back to this page with warnings in the url query string
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <ContentContainer>
        <CartSummary />
      </ContentContainer>
      <ContentContainer>
        <Form onSubmit={handleSubmit}>
          {warnings && (
            <div>
              <ul>
                {warnings.map((warning, i) => (
                  <li key={i}>{warning}</li>
                ))}
              </ul>
            </div>
          )}
          <FieldsetGroup>
            <InputRow>
              <div className='label__radio__input pr-3'>
                <input
                  className='input-radio'
                  type='radio'
                  value='pickup'
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
          </FieldsetGroup>

          <AnimatePresence exitBeforeEnter initial={false}>
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
                <legend className='text-sm text-blue-800'>
                  pickup location
                </legend>
                <PickupChoiceInputs
                  billingDetails={billingDetails}
                  setBillingDetails={setBillingDetails}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button type='submit'>
            <input
              name='cart'
              value={JSON.stringify(cartItems)}
              type='hidden'
            />
            {transition.state === 'submitting'
              ? 'calculating...'
              : 'looks good!'}{' '}
          </button>
        </Form>
      </ContentContainer>
    </div>
  );
}
