import FieldsetGroup from './styledComponents/FieldsetGroup'
import InputRow from './styledComponents/InputRow'
import type { FulfillmentDetails } from 'myTypes'
import type { PickupLocation } from 'sanityTypes'

export default function PickupChoiceInputs({
  fulfillmentDetails,
  setFulfillmentDetails,
  pickupLocations,
}: {
  fulfillmentDetails: FulfillmentDetails
  setFulfillmentDetails: React.Dispatch<
    React.SetStateAction<FulfillmentDetails>
  >
  pickupLocations: PickupLocation[]
}) {
  return (
    <FieldsetGroup>
      {pickupLocations.map((pickupLocation) => {
        return (
          <InputRow key={pickupLocation.name}>
            <div className='label__radio__input pr-3'>
              <input
                className='input-radio'
                type='radio'
                value={pickupLocation.name}
                checked={
                  fulfillmentDetails.pickupLocation === pickupLocation.name
                }
                name='pickupLocation'
                id={`checkout_id_pickup_${pickupLocation.name}`}
                onChange={(e) => {
                  setFulfillmentDetails({
                    ...fulfillmentDetails,
                    pickupLocation: e.target.value,
                  })
                }}
              />
            </div>
            <label
              className={`flex flex-col cursor-pointer ${
                fulfillmentDetails.pickupLocation === pickupLocation.name
                  ? 'text-blue-800'
                  : 'text-gray-700'
              }`}
              htmlFor={`checkout_id_pickup_${pickupLocation.name}`}
            >
              <div className='pickupAddress text-left'>
                <p className='pickup-locationName'>{pickupLocation.name}</p>
                <p className='text-sm'>{pickupLocation.pickupAddressLine1}</p>
                <p className='text-sm'>{pickupLocation.pickupAddressLine2}</p>
                <p className='text-sm'>
                  {pickupLocation.pickupCity}, {pickupLocation.pickupState}
                  {pickupLocation.pickupZip}
                </p>
              </div>
            </label>
          </InputRow>
        )
      })}
    </FieldsetGroup>
  )
}
