import {
  Form,
  useActionData,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import CollapsibleCartSummary from '~/components/CollapsibleCartSummary'
import { useCartItems } from '~/context/useCart'
import { useState } from 'react'
import type { LoaderArgs } from '@remix-run/node'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

export const loader = ({ request }: LoaderArgs) => {
  const urlOrigin = new URL(request.url).origin
  return urlOrigin
}

export default function PayIndex() {
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const urlOrigin = useLoaderData()
  const cartItems = useCartItems()
  const elements = useElements()
  const stripe = useStripe()

  const { orderDetails, shippingCost } = useActionData()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    if (!stripe || !elements) return null

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${urlOrigin}/writeOrder`,
        },
      })
      .then((result) => {
        if (result.error) {
          setSubmitting(false)
          setError(true)
          setErrorMessage(result.error.message!)
        }
      })
  }

  if (!cartItems.length) {
    return (
      <ContentContainer>
        Oops! There was an error retrieving your cart, please continue shopping.
      </ContentContainer>
    )
  }

  return (
    <>
      {error && <ErrorContainer error={errorMessage} />}
      <ContentContainer>
        <CollapsibleCartSummary
          orderDetails={orderDetails}
          shippingCost={shippingCost}
        />
        <Form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            className={`${
              submitting === true ? 'bg-amber-900' : 'bg-amber-800'
            } text-amber-50 px-8 py-3 mt-5 rounded-xl`}
            disabled={submitting}
          >
            {submitting === true ? 'confirming...' : 'confirm'}
          </button>
        </Form>
      </ContentContainer>
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
