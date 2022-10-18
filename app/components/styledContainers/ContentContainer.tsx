import React from 'react';

export default function ContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-slate-50 p-4 rounded max-w-[800px] my-0 mx-auto w-full'>
      {children}
    </div>
  );
}
