import { FulfillmentDetails, OrderDetails } from 'myTypes';
import FieldsetGroup from './styledContainers/FieldsetGroup';
import InputRow from './styledContainers/InputRow';

export default function PickupChoiceInputs({
  fulfillmentDetails,
  setFulfillmentDetails,
}: {
  fulfillmentDetails: FulfillmentDetails;
  setFulfillmentDetails: React.Dispatch<
    React.SetStateAction<FulfillmentDetails>
  >;
}) {
  return (
    <FieldsetGroup>
      <InputRow>
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
              });
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
          <div className='radio__label pickupAddress'>
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
              });
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
          <div className='radio__label pickupAddress'>
            <p className='pickup-locationName'>edge studio</p>
            <p className='text-sm'>905 turnpike st,</p>
            <p className='text-sm'>suite. f</p>
            <p className='text-sm'>canton, ma 02021</p>
          </div>
        </label>
      </InputRow>
    </FieldsetGroup>
  );
}
