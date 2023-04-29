import { FulfillmentDetails } from 'myTypes'
import FieldsetGroup from './styledComponents/FieldsetGroup'
import InputRow from './styledComponents/InputRow'
import { PickupLocation } from 'sanityTypes'

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
      {/* <InputRow>
        <div className='label__radio__input pr-3'>
          <input
            className='input-radio'
            type='radio'
            value='daniels'
            checked={fulfillmentDetails.pickupLocation === 'daniels'}
            name='pickupLocation'
            id='checkout_id_pickup_daniels'
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
            fulfillmentDetails.pickupLocation === 'daniels'
              ? 'text-blue-800'
              : 'text-gray-700'
          }`}
          htmlFor='checkout_id_pickup_daniels'
        >
          <div className=' pickupAddress text-left'>
            <p className='pickup-locationName'>neighborly coffee</p>
            <p className='text-sm'>36 lincoln rd.</p>
            <p className='text-sm'>sharon, ma 02067</p>
          </div>
        </label>
      </InputRow>
      <InputRow>
        <div className='label__radio__input pr-3'>
          <input
            required
            className='input-radio'
            type='radio'
            value='edge'
            checked={fulfillmentDetails.pickupLocation === 'edge'}
            name='pickupLocation'
            id='checkout_id_pickup_edge'
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
            fulfillmentDetails.pickupLocation === 'edge'
              ? 'text-blue-800'
              : 'text-gray-700'
          }`}
          htmlFor='checkout_id_pickup_edge'
        >
          <div className='pickupAddress text-left'>
            <p className='pickup-locationName'>edge studio</p>
            <p className='text-sm'>905 turnpike st,</p>
            <p className='text-sm'>suite. f</p>
            <p className='text-sm'>canton, ma 02021</p>
          </div>
        </label>
      </InputRow> */}
    </FieldsetGroup>
  )
}
