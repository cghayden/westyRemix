import type { FulfillmentDetails } from 'myTypes'

export default function calcShipping(
  verifiedTotal: number,
  fulfillmentDetails: FulfillmentDetails
) {
  if (fulfillmentDetails.method === 'pickup') {
    return 0
  }
  if (verifiedTotal < 4999) {
    return 1000
  } else return 0
}
