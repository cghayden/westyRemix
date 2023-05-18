import { Outlet, useRouteError } from '@remix-run/react'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

function BlogRoot() {
  return <Outlet />
}
export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}

export default BlogRoot
