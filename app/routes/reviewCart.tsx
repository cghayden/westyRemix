import { useState } from 'react'
import { useSearchParams, useSubmit, useNavigation } from '@remix-run/react'
import { motion, AnimatePresence } from 'framer-motion'
import { CustomerDetails, FulfillmentDetails } from 'myTypes'
import CartSummary from '~/components/CartSummary'
import ShippingDetailsInputs from '~/components/ShippingDetailsInputs'
import CustomerDetailsInputs from '~/components/CustomerDetailsInputs'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { useCartItems } from '~/context/useCart'
import FieldsetGroup from '~/components/styledComponents/FieldsetGroup'
import InputRow from '~/components/styledComponents/InputRow'
import StoreFrontIcon from '~/icons/StoreFrontIcon'
import ShippingTruckIcon from '~/icons/ShippingTruckIcon'
import PickupChoiceInputs from '~/components/PickupChoiceInputs'
import styles from '~/styles/formStyles.css'
import calcTotalPrice from '~/lib/calcCartTotal'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}
export default function CheckoutPage() {
  let navigation = useNavigation()
  const submit = useSubmit()

  const [customerDetails, setCustomerDetails] = useState({} as CustomerDetails)
  const [fulfillmentDetails, setFulfillmentDetails] = useState({
    method: 'pickup',
    pickupLocation: '',
  } as FulfillmentDetails)

  const cartItems = useCartItems()
  const [searchParams] = useSearchParams()
  const warnings = searchParams.getAll('warnings')
  const shipping = calcTotalPrice(cartItems) < 4999 ? 1000 : 0

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const formData = new FormData()
    formData.set(
      'orderDetails',
      JSON.stringify({ customerDetails, fulfillmentDetails, cart: cartItems })
    )
    submit(formData, { method: 'post', action: '/pay' })
  }

  // review cart, and on confirmation, send cart to '/pay' action handler via form submission
  // if the action finds errors of price or stock, it will redirect back to this page with warnings in the url query string
  if (!cartItems.length) {
    return (
      <ContentContainer>
        <CartSummary cartItems={cartItems} />
      </ContentContainer>
    )
  }
  return (
    <div>
      <h2 className='text-center text-xl p-1'>Review Your Cart</h2>
      <ContentContainer>
        <CartSummary cartItems={cartItems} />
      </ContentContainer>
      <ContentContainer>
        <form onSubmit={handleSubmit}>
          {warnings && (
            <div>
              <ul>
                {warnings.map((warning, i) => (
                  <li key={i}>{warning}</li>
                ))}
              </ul>
            </div>
          )}
          <legend className=' text-blue-800 text-left'>contact</legend>
          <CustomerDetailsInputs
            customerDetails={customerDetails}
            setCustomerDetails={setCustomerDetails}
          />
          <legend className='text-left text-blue-800'>fulfillment </legend>
          <FieldsetGroup>
            <InputRow>
              <div className='label__radio__input pr-3'>
                <input
                  className='input-radio'
                  type='radio'
                  value='pickup'
                  checked={fulfillmentDetails.method === 'pickup'}
                  name='fulfillmentMethod'
                  id='checkout_id_delivery_pickup'
                  onChange={() =>
                    setFulfillmentDetails({
                      ...fulfillmentDetails,
                      method: 'pickup',
                    })
                  }
                />
              </div>
              <label
                className={`flex flex-col cursor-pointer ${
                  fulfillmentDetails.method === 'pickup'
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
                  checked={fulfillmentDetails.method === 'shipping'}
                  name='fulfillmentMethod'
                  id='checkout_id_delivery_shipping'
                  onChange={() =>
                    setFulfillmentDetails({
                      ...fulfillmentDetails,
                      method: 'shipping',
                    })
                  }
                />
              </div>
              <label
                className={`flex flex-col cursor-pointer items-start ${
                  fulfillmentDetails.method === 'shipping'
                    ? 'text-blue-800'
                    : 'text-gray-700'
                }`}
                htmlFor='checkout_id_delivery_shipping'
              >
                <span>
                  <ShippingTruckIcon />
                  {shipping === 1000 ? `shipping : $10 ` : `shipping : free  `}
                </span>
                <span className='text-sm text-amber-800'>
                  {shipping == 1000 ? `free on orders over $50` : ` `}
                </span>
              </label>
            </InputRow>
          </FieldsetGroup>

          <AnimatePresence mode='wait' initial={false}>
            {fulfillmentDetails.method === 'shipping' && (
              <motion.div
                key={'shipping'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <legend className='text-sm text-blue-800'>ship to:</legend>
                <ShippingDetailsInputs
                  fulfillmentDetails={fulfillmentDetails}
                  setFulfillmentDetails={setFulfillmentDetails}
                />
              </motion.div>
            )}
            {fulfillmentDetails.method === 'pickup' && (
              <motion.div
                key={'pickup'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <legend className='text-left text-blue-800'>
                  pickup location
                </legend>
                <PickupChoiceInputs
                  fulfillmentDetails={fulfillmentDetails}
                  setFulfillmentDetails={setFulfillmentDetails}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            type='submit'
            className='bg-green-400 px-12 py-4 rounded-lg w-full'
          >
            <input
              name='cart'
              value={JSON.stringify(cartItems)}
              type='hidden'
            />
            {navigation.state === 'submitting'
              ? 'calculating...'
              : 'looks good!'}{' '}
          </button>
        </form>
      </ContentContainer>
    </div>
  )
}
