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
  const customerDetails = JSON.parse(paymentIntent.metadata.customerDetails);
  const fulfillmentDetails = JSON.parse(
    paymentIntent.metadata.fulfillmentDetails
  );
  const cartItems = JSON.parse(paymentIntent.description);
  const orderId = paymentIntent.id;
  const total = paymentIntent.amount_received;

  const orderDetails: OrderDetails = {
    cart: cartItems,
    customerDetails,
    fulfillmentDetails,
    total,
    id: orderId,
  };

  return orderDetails;
};

export default function success() {
  const orderDetails = useLoaderData<typeof loader>();
  console.log('orderDetails in success', orderDetails);
  const cartItems = orderDetails?.cart;
  const customerDetails = orderDetails?.customerDetails;
  const fulfillmentDetails = orderDetails?.fulfillmentDetails;

  return (
    <main>
      <ContentContainer>
        <h2 className='text-xl font-bold'>Thank You For Your Order!</h2>
        <div className='ml-4'>
          <p>Check your email for a receipt of your order</p>
          <p>
            We'll contact you when your order
            {fulfillmentDetails?.method === 'pickup'
              ? ' is ready for pickup'
              : ' ships'}
          </p>
        </div>
        <h3 className='text-xl font-bold'>Order Summary</h3>
        <div>
          <div className='ml-4'>
            <p>{customerDetails?.customerName}</p>
            <p>{customerDetails?.customerEmail}</p>
            <p>{customerDetails?.customerPhone}</p>
          </div>
        </div>
        {fulfillmentDetails?.method === 'pickup' ? (
          <div>
            <h3 className='text-xl font-bold'>Delivery:</h3>
            <div className='ml-4'>
              <p>pickup at: {fulfillmentDetails.pickupLocation}</p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className='text-xl font-bold'>ship to: </h3>
            <div className='ml-4'>
              <p>{fulfillmentDetails?.shippingName}</p>
              <p>{fulfillmentDetails?.shippingAddressLine1}</p>
              <p>{fulfillmentDetails?.shippingAddressLine2}</p>
              <p>
                <span>{fulfillmentDetails?.shippingCity}</span>
                <span>{fulfillmentDetails?.shippingPostal_code}</span>
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
          {fulfillmentDetails?.method === 'shipping' && (
            <li>
              <p className='flex'>
                Shipping:
                <span className='ml-auto'>{`$${formatMoney(
                  fulfillmentDetails.shippingCost
                )}`}</span>
              </p>
            </li>
          )}
          <li>
            <p className='flex'>
              Total:{' '}
              <span className='ml-auto'>
                ${formatMoney(orderDetails?.total)}
              </span>
            </p>
          </li>
        </ul>
      </ContentContainer>
    </main>
  );
}
