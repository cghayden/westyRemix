import { Outlet, useRouteError } from '@remix-run/react'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

function CoffeeRoot() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}

export default CoffeeRoot
