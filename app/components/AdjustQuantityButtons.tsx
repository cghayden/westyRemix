import { CartItem } from 'myTypes';
import { useState } from 'react';
import {
  useCartItems,
  useChangeCartItemQuantity,
  useRemoveFromCart,
} from '~/context/useCart';
import formatMoney from '~/lib/formatMoney';
import getTotalQuantityInCart from '~/lib/getTotalQuantityInCart';

export default function AdjustQuantityButtons({
  cartItem,
}: {
  cartItem: CartItem;
}) {
  const [alert, setAlert] = useState<string | null>();
  const changeCartItemQuantity = useChangeCartItemQuantity();
  const removeFromCart = useRemoveFromCart();
  const cartItems = useCartItems();

  const totalCartQuantity = getTotalQuantityInCart(
    cartItem.coffeeId,
    cartItems
  );

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='rounded-full flex justify-evenly bg-green-600 h-9 w-[100px] items-center'>
          <p>
            <button
              className='-mt-1 text-green-50'
              disabled={cartItem.quantity < 1}
              onClick={() => {
                if (cartItem.quantity == 1) {
                  if (confirm(`remove ${cartItem.name} from cart?`)) {
                    removeFromCart(cartItem);
                  }
                  return;
                }

                changeCartItemQuantity({
                  name: cartItem.name,
                  coffeeId: cartItem.coffeeId,
                  quantity: -1,
                  grind: cartItem.grind,
                  variant_id: cartItem.variant_id,
                  price: cartItem.price,
                  inStock: cartItem.inStock,
                });
              }}
            >
              <span className='text-2xl'>-</span>
            </button>
          </p>
          <p className='mx-4 text-xl text-green-50'>{cartItem.quantity}</p>
          <p>
            <button
              className='-mt-1 text-green-50'
              onClick={() => {
                if (
                  totalCartQuantity === cartItem.inStock ||
                  cartItem.inStock < totalCartQuantity
                ) {
                  setAlert(`There are only ${cartItem.inStock} available`);
                  setTimeout(() => {
                    setAlert(null);
                  }, 2000);
                } else {
                  changeCartItemQuantity({
                    name: cartItem.name,
                    coffeeId: cartItem.coffeeId,
                    quantity: 1,
                    grind: cartItem.grind,
                    variant_id: cartItem.variant_id,
                    price: cartItem.price,
                    inStock: cartItem.inStock,
                  });
                }
              }}
            >
              <span className='text-2xl'>+</span>
            </button>
          </p>
        </div>
        {alert && <p>{alert}</p>}
        <p className='text-xl'>
          {`$${formatMoney(cartItem.price * cartItem.quantity)} `}
        </p>
      </div>
    </>
  );
}
