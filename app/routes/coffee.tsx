import { Outlet, useRouteError } from '@remix-run/react'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

export default function CoffeeRoot() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
