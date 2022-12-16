import { FulfillmentDetails } from 'myTypes';
import CheckoutFormField from './CheckoutFormField';
import FieldsetGroup from './styledContainers/FieldsetGroup';

export default function ShippingDetailsInputs({
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
      <CheckoutFormField
        label={!fulfillmentDetails.shippingName?.length ? '' : 'name'}
        id='shippingName'
        name='shippingName'
        inputType={'text'}
        placeholder={!fulfillmentDetails.shippingName?.length ? 'name' : ''}
        required={true}
        autoComplete='name'
        value={fulfillmentDetails.shippingName}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={
          !fulfillmentDetails.shippingAddressLine1?.length ? '' : 'address'
        }
        id='shippingAddressLine1'
        name='shippingAddressLine1'
        inputType={'text'}
        placeholder={
          !fulfillmentDetails.shippingAddressLine1?.length
            ? 'address line 1'
            : ''
        }
        required={true}
        autoComplete='address-line1'
        value={fulfillmentDetails.shippingAddressLine1}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!fulfillmentDetails.shippingAddressLine2?.length ? '' : ''}
        id='shippingAddressLine2'
        name='shippingAddressLine2'
        inputType={'text'}
        placeholder={
          !fulfillmentDetails.shippingAddressLine2?.length
            ? 'address line 2'
            : ''
        }
        required={false}
        autoComplete='address-line2'
        value={fulfillmentDetails.shippingAddressLine2}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!fulfillmentDetails.shippingCity?.length ? '' : 'city'}
        id='shippingCity'
        name='shippingCity'
        inputType={'text'}
        placeholder={!fulfillmentDetails.shippingCity?.length ? 'city' : ''}
        required={true}
        autoComplete='address-level2'
        value={fulfillmentDetails.shippingCity}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!fulfillmentDetails.shippingState?.length ? '' : 'state'}
        id='shippingState'
        name='shippingState'
        inputType={'text'}
        placeholder={!fulfillmentDetails.shippingState?.length ? 'state' : ''}
        required={true}
        autoComplete='address-level1'
        value={fulfillmentDetails.shippingState}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!fulfillmentDetails.shippingPostal_code?.length ? '' : 'zip'}
        id='shippingPostal_code'
        name='shippingPostal_code'
        inputType={'text'}
        placeholder={
          !fulfillmentDetails.shippingPostal_code?.length ? 'zip' : ''
        }
        required={true}
        autoComplete='postal-code'
        value={fulfillmentDetails.shippingPostal_code}
        onChange={(e) => {
          setFulfillmentDetails({
            ...fulfillmentDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </FieldsetGroup>
  );
}
