import type { PickupLocation } from 'sanityTypes'
import type { CustomerDetails, FulfillmentDetails } from 'myTypes'
import { useState } from 'react'
import {
  useSearchParams,
  useSubmit,
  useNavigation,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { motion, AnimatePresence } from 'framer-motion'
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
import sanity from '~/lib/sanity/sanity'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import PageHeading from '~/components/styledComponents/PageHeading'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const loader = async () => {
  const query = `*[_type == "pickupLocation"]`
  const pickupLocations: PickupLocation[] = await sanity.fetch(query)
  return pickupLocations
}

export default function ReviewCart() {
  const pickupLocations = useLoaderData<typeof loader>()

  let navigation = useNavigation()
  const submit = useSubmit()

  const [customerDetails, setCustomerDetails] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  } as CustomerDetails)
  const [fulfillmentDetails, setFulfillmentDetails] = useState({
    method: 'pickup',
    pickupLocation: '',
  } as FulfillmentDetails)

  const cartItems = useCartItems()
  const shippingCost = calcTotalPrice(cartItems) < 4999 ? 1000 : 0

  // review cart, collect customer info, and post that info and cart to /pay for validation of stock and prices on the backend, in  '/pay' action handler

  // if the /pay finds errors of price or stock, it will redirect back to this page with warnings in the url query string
  const [searchParams] = useSearchParams()
  const warnings = searchParams.getAll('warnings')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const formData = new FormData()
    formData.set(
      'orderDetails',
      JSON.stringify({ customerDetails, fulfillmentDetails, cart: cartItems })
    )
    // it's best to make any JSON object submissions explicit with either encType: "application/x-www-form-urlencoded" or encType: "application/json" to ease your eventual v7 migration path: see notes at bottom of file
    submit(formData, { method: 'POST', action: '/pay' })
  }

  if (!cartItems.length) {
    return (
      <ContentContainer>
        <div className='my-12 text-center text-lg'>
          <p>You're cart is empty!!</p>
        </div>
      </ContentContainer>
    )
  }
  return (
    <div>
      <PageHeading text='Review Your Cart' />
      <ContentContainer>
        <CartSummary
          cartItems={cartItems}
          shipping={fulfillmentDetails.method === 'shipping'}
          shippingCost={shippingCost}
        />
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
                  {shippingCost === 1000
                    ? `shipping : $10 `
                    : `shipping : free  `}
                </span>
                <span className='text-sm text-amber-800'>
                  {shippingCost == 1000 ? `free on orders over $50` : ` `}
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
                <legend className='text-left text-blue-800'>ship to:</legend>
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
                  pickupLocations={pickupLocations}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type='submit'
            className={`${
              navigation.state === 'submitting' ? 'bg-gray-400' : 'bg-green-400'
            } px-12 py-4 rounded-lg w-full`}
            disabled={navigation.state === 'submitting' ? true : false}
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

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}

//
// Remix 1.18.0 release notes: https://github.com/remix-run/remix/releases
//
// JSON/Text Submissions
// If you're not a huge fan of FormData, Remix 1.18.0 updates to react-router-dom@6.14.0 which brings along support for opt-in application/json or text/plain encoding in useSubmit/fetcher.submit, and adds corresponding navigation.json/navigation.text and fetcher.json/fetcher.text fields containing the respective submissions. For details please check out the React Router release notes or the useSubmit docs. (#6570)

//  Submit to your action using JSON
// submit({ key: "value" }, { method: "post", encType: "application/json" });
//  available in components via useNavigation().json and actions via request.json()
// Submit to your action using text
// submit("plain text", { method: "post", encType: "text/plain" });
//  available in components via useNavigation().text and actions via request.text()
// Warning
// Please be aware that useSubmit() and fetcher.submit() are not suitable for Progressive Enhancement, so switching to these to leverage JSON or Text submissions will break your app when JS is unable to load/execute. It's recommended to stick with normal FormData submissions for critical aspects of your application.

// Default Behavior

// Please also note that to avoid a breaking change, the default behavior will still encode a simple key/value JSON object into a FormData instance:

// submit({ key: "value" }, { method: "post" });
// available in components via useNavigation().formData and actions via request.formData()
// }
// This behavior will likely change in the future when React Router releases v7, so it's best to make any JSON object submissions explicit with either encType: "application/x-www-form-urlencoded" or encType: "application/json" to ease your eventual v7 migration path.
