import React from 'react';

export default function CheckoutTextInputRow({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='text-sm '>{children}</div>;
}
