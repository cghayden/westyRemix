import { BillingDetails } from 'myTypes';
import CheckoutFormField from './CheckoutFormField';
import FieldsetGroup from './styledContainers/FieldsetGroup';

export default function ShippingDetailsInputs({
  billingDetails,
  setBillingDetails,
}: {
  billingDetails: BillingDetails;
  setBillingDetails: React.Dispatch<React.SetStateAction<BillingDetails>>;
}) {
  const shipping = billingDetails.shipping;
  return (
    <FieldsetGroup>
      <CheckoutFormField
        label={!billingDetails.shipping?.name?.length ? '' : 'name'}
        id='shippingName'
        inputType={'text'}
        placeholder={!billingDetails.shipping?.name?.length ? 'name' : ''}
        required={true}
        autoComplete='name'
        value={billingDetails.shipping?.name}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, name: e.target.value },
          });
        }}
      />
      <CheckoutFormField
        label={!billingDetails.shipping?.line1?.length ? '' : 'address'}
        id='shippingLine1'
        inputType={'text'}
        placeholder={
          !billingDetails.shipping?.line1?.length ? 'address line 1' : ''
        }
        required={true}
        autoComplete='address-line1'
        value={billingDetails.shipping?.line1}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, line1: e.target.value },
          });
        }}
      />
      <CheckoutFormField
        label={!billingDetails.shipping?.line2?.length ? '' : ''}
        id='shippingLine2'
        inputType={'text'}
        placeholder={
          !billingDetails.shipping?.line2?.length ? 'address line 2' : ''
        }
        required={false}
        autoComplete='address-line2'
        value={billingDetails.shipping?.line2}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, line2: e.target.value },
          });
        }}
      />
      <CheckoutFormField
        label={!billingDetails.shipping?.city?.length ? '' : 'city'}
        id='shippingCity'
        inputType={'text'}
        placeholder={!billingDetails.shipping?.city?.length ? 'city' : ''}
        required={true}
        autoComplete='address-level2'
        value={billingDetails.shipping?.city}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, city: e.target.value },
          });
        }}
      />
      <CheckoutFormField
        label={!billingDetails.shipping?.state?.length ? '' : 'state'}
        id='shippingState'
        inputType={'text'}
        placeholder={!billingDetails.shipping?.state?.length ? 'state' : ''}
        required={true}
        autoComplete='address-level1'
        value={billingDetails.shipping?.state}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, state: e.target.value },
          });
        }}
      />
      <CheckoutFormField
        label={!billingDetails.shipping?.postal_code?.length ? '' : 'zip'}
        id='shippingPostal_code'
        inputType={'text'}
        placeholder={!billingDetails.shipping?.postal_code?.length ? 'zip' : ''}
        required={true}
        autoComplete='postal-code'
        value={billingDetails.shipping?.postal_code}
        onChange={(e) => {
          setBillingDetails({
            ...billingDetails,
            shipping: { ...shipping, postal_code: e.target.value },
          });
        }}
      />
    </FieldsetGroup>
  );
}
