import { CustomerDetails } from 'myTypes';
import CheckoutFormField from './CheckoutFormField';
import FieldsetGroup from './styledContainers/FieldsetGroup';

export default function CustomerDetailsInputs({
  customerDetails,
  setCustomerDetails,
}: {
  customerDetails: CustomerDetails;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetails>>;
}) {
  //will still react controlled inputs for custom UI on form...
  return (
    <FieldsetGroup>
      <CheckoutFormField
        label={!customerDetails.customerName?.length ? '' : 'name'}
        id='customerName'
        name='customerName'
        inputType={'text'}
        placeholder={!customerDetails.customerName?.length ? 'name' : ''}
        required={true}
        autoComplete='name'
        value={customerDetails.customerName}
        onChange={(e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!customerDetails.customerPhone?.length ? '' : 'phone'}
        id='customerPhone'
        name='customerPhone'
        inputType={'text'}
        placeholder={!customerDetails.customerPhone?.length ? 'phone' : ''}
        required={true}
        autoComplete='phone'
        value={customerDetails.customerPhone}
        onChange={(e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
      <CheckoutFormField
        label={!customerDetails.customerEmail?.length ? '' : 'email'}
        id='customerEmail'
        name='customerEmail'
        inputType={'email'}
        placeholder={!customerDetails.customerEmail?.length ? 'email' : ''}
        required={true}
        autoComplete='email'
        value={customerDetails.customerEmail}
        onChange={(e) => {
          setCustomerDetails({
            ...customerDetails,
            [e.target.name]: e.target.value,
          });
        }}
      />
    </FieldsetGroup>
  );
}
