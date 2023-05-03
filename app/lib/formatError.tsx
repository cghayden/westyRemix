import { isRouteErrorResponse } from '@remix-run/react'
function formatErrorMessage(error: unknown): React.ReactNode {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        {/* <p>{error.data}</p> */}
      </div>
    )
  } else if (error instanceof Error) {
    // TODO handle stack trace
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
      </div>
    )
  } else if (typeof error === 'string') {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    )
  } else {
    console.error(error)
    return <h1>Unknown Error</h1>
  }
}

export { formatErrorMessage }
