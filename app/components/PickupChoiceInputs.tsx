import { BillingDetails } from 'myTypes';
import CheckoutFormField from './CheckoutFormField';
import FieldsetGroup from './styledContainers/FieldsetGroup';
import InputRow from './styledContainers/InputRow';

export default function PickupChoiceInputs({
  billingDetails,
  setBillingDetails,
}: {
  billingDetails: BillingDetails;
  setBillingDetails: React.Dispatch<React.SetStateAction<BillingDetails>>;
}) {
  // const shippingDetails = billingDetails.shipping;
  return (
    <FieldsetGroup>
      <InputRow>
        <div className='label__radio__input pr-3'>
          <input
            className='input-radio'
            type='radio'
            value='pickup'
            checked={billingDetails.pickupLocation === 'daniels'}
            name='pickupLocation'
            id='checkout_id_pickup_daniels'
            onChange={() => {
              const newDetails: BillingDetails = {
                ...billingDetails,
                pickupLocation: 'daniels',
              };
              setBillingDetails(newDetails);
            }}
          />
        </div>
        <label
          className={`flex flex-col cursor-pointer ${
            billingDetails.pickupLocation === 'daniels'
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
            className='input-radio'
            type='radio'
            value='edge'
            checked={billingDetails.pickupLocation === 'edge'}
            name='pickupLocation'
            id='checkout_id_pickup_edge'
            onChange={() => {
              const newDetails: BillingDetails = {
                ...billingDetails,
                pickupLocation: 'edge',
              };
              setBillingDetails(newDetails);
            }}
          />
        </div>
        <label
          // active={billingDetails.deliveryMethod === 'Pickup' ? darkBlue : gray}
          className={`flex flex-col cursor-pointer ${
            billingDetails.pickupLocation === 'edge'
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
      {/* </div> */}
    </FieldsetGroup>
  );
}
