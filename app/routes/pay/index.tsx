import { Form, useLoaderData, useNavigation } from '@remix-run/react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import CollapsibleCartSummary from '~/components/CollapsibleCartSummary'
import { useCartItems } from '~/context/useCart'
import { useState } from 'react'
import { LoaderArgs } from '@remix-run/node'

export const loader = ({ request }: LoaderArgs) => {
  const urlOrigin = new URL(request.url).origin
  return urlOrigin
}

export default function Index() {
  const urlOrigin = useLoaderData()
  const cartItems = useCartItems()
  const elements = useElements()
  const stripe = useStripe()
  const [submitting, setSubmitting] = useState(false)
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setSubmitting(true)
    if (!stripe || !elements) return null

    stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${urlOrigin}/writeOrder`,
      },
    })
  }

  if (!cartItems.length) {
    return (
      <ContentContainer>
        Oops! There was an error retrieving your cart, please continue shopping.
      </ContentContainer>
    )
  }

  // TODO - pending UI
  return (
    <ContentContainer>
      <CollapsibleCartSummary />
      <Form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          className='bg-amber-700 text-amber-50 px-8 py-3 mt-5 rounded-xl'
          disabled={submitting}
        >
          {submitting === true ? 'confirming' : 'confirm'}
        </button>
      </Form>
    </ContentContainer>
  )
}
