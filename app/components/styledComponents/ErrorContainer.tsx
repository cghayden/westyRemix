import { isRouteErrorResponse } from '@remix-run/react'
import { formatErrorMessage } from '~/lib/formatError'

export const ErrorContainer = ({ error }: { error: unknown }) => {
  const formattedError = formatErrorMessage(error)
  return (
    <div className='bg-red-200 text-slate-800 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 my-6 mx-auto shadow-lg text-center'>
      {formattedError}
    </div>
  )
}
