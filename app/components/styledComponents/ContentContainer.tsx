import React from 'react'

export default function ContentContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='bg-slate-50 text-slate-800 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 my-6 mx-auto shadow-lg text-center'>
      {children}
    </div>
  )
}
