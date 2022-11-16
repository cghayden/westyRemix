import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { retrievePaymentIntent } from '~/lib/stripePaymentIntent';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import { OrderDetails } from 'myTypes';
import formatMoney from '~/lib/formatMoney';

export const loader = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const id = url.searchParams.get('payment_intent');
  if (!id) return null;
  const paymentIntent = await retrievePaymentIntent(id);
  const orderDetails: OrderDetails = JSON.parse(
    paymentIntent.metadata.orderDetails
  );

  return orderDetails;
};

export default function success() {
  const orderDetails = useLoaderData<typeof loader>();
  console.log('orderDetails in success', orderDetails);
  const cartItems = orderDetails?.cart;
  const customer = orderDetails?.customer;
  const fulfillment = orderDetails?.fulfillment;

  return (
    <main>
      <ContentContainer>
        <h2 className='text-xl font-bold'>Thank You For Your Order!</h2>
        <div className='ml-4'>
          <p>Check your email for a receipt of your order</p>
          <p>
            We'll contact you when your order
            {fulfillment?.method === 'pickup'
              ? ' is ready for pickup'
              : ' ships'}
          </p>
        </div>
        <h3 className='text-xl font-bold'>Order Summary</h3>
        <div>
          <div className='ml-4'>
            <p>{customer?.customerName}</p>
            <p>{customer?.customerEmail}</p>
            <p>{customer?.customerPhone}</p>
          </div>
        </div>
        {fulfillment?.method === 'pickup' ? (
          <div>
            <h3 className='text-xl font-bold'>Delivery:</h3>
            <div className='ml-4'>
              <p>pickup at: {fulfillment.pickupLocation}</p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className='text-xl font-bold'>ship to: </h3>
            <div className='ml-4'>
              <p>{fulfillment?.shippingName}</p>
              <p>{fulfillment?.shippingAddressLine1}</p>
              <p>{fulfillment?.shippingAddressLine2}</p>
              <p>
                <span>{fulfillment?.shippingCity}</span>
                <span>{fulfillment?.shippingPostal_code}</span>
              </p>
            </div>
          </div>
        )}

        <ul className='w-2/3 mx-auto'>
          {cartItems?.map((cartItem) => (
            <li key={cartItem.name}>
              <p className='flex'>
                {`${cartItem.quantity} ${cartItem.name}, ${cartItem.grind}: `}
                <span className='ml-auto'>
                  {`$${formatMoney(cartItem.price * cartItem.quantity)}`}
                </span>
              </p>
            </li>
          ))}
          {fulfillment?.method === 'shipping' && (
            <li className='px-3'>
              <p className='flex'>
                Shipping: set cost on fulfillment type and include on Payment
                Intent
                {/* <span className='ml-auto'>{`$${formatMoney(shipping)}`}</span> */}
              </p>
            </li>
          )}
        </ul>
        {/* 
            <div className='paymentDetails'>
              {shippingDetails.deliveryMethod === 'Shipping' && (
                <p
                  style={{
                    textAlign: 'right',
                    color: 'darkgreen',
                    fontSize: '1rem',
                  }}
                >
                  Shipping: {charge.amount < 5000 ? '$10.00' : '$0.00'}
                </p>
              )}
              <p>Total Amount Charged: ${formatMoney(charge.amount)}</p>
            </div>
            <DeliveryMethodDiv>
              {shippingDetails.deliveryMethod === 'Pickup' ? (
                <>
                  <h4>picking up at</h4>
                  <PickupDetailsReview shippingDetails={shippingDetails} />
                </>
              ) : (
                <>
                  <h4>shipping to:</h4>
                  <ShippingDetailsReview shippingDetails={shippingDetails} />
                </>
              )}
            </DeliveryMethodDiv>
          */}
      </ContentContainer>
    </main>
  );
}
