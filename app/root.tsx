import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
  useLoaderData,
} from '@remix-run/react'
import { SiteSettings } from 'sanityTypes'
import Header from './components/Header'
import styles from './styles/tailwind-build.css'
import sanity from './lib/sanity/sanity'
import { CartProvider } from './context/useCart'
import Preview from './components/Preview'
import { useState } from 'react'
import { filterDataToSingleItem } from './lib/sanity/filterDataToSingleItem'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => {
  const description = `Sample Ecommerce Site`
  return {
    description,
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const query = `*[_type == "siteSettings"] {
    _id,
    backgroundColor,
    textColor
  } `
  const requestUrl = new URL(request?.url)
  const preview: boolean =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await sanity.fetch(query).catch((err) => console.log(err))
  console.log('initialData', initialData)

  const siteSettings = filterDataToSingleItem(initialData, preview)

  const data = {
    siteSettings,
    preview,
    query: preview ? query : null,
    queryParams: null,
  }
  return data
}

function Document({
  children,
  title = `Westy Remix`,
}: {
  children: React.ReactNode
  title?: string
}) {
  const { siteSettings, preview, query, queryParams } =
    useLoaderData<typeof loader>()
  const [data, setData] = useState(siteSettings)
  console.log('data', data)
  // console.log('siteSettings', siteSettings)

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={query}
          queryParams={queryParams}
        />
      )}
      <body
        style={{
          backgroundColor: `${siteSettings?.backgroundColor.hex}`,
          overscrollBehavior: 'none',
        }}
      >
        <CartProvider initialCart={[]}>{children}</CartProvider>
        <Scripts />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <Header />
      <Outlet />
      <div>Footer</div>
    </Document>
  )
}
export function CatchBoundary() {
  const caught = useCatch()

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <div className='error-container'>
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </Document>
  )
}

//  with remix <Scripts/>, you can accept the error prop in all your ErrorBoundary components and console.error(error); and you'll get even server-side errors logged in the browser's console.

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title='Uh-oh!'>
      <Header />
      <div className='error-container'>
        <h1>App Error</h1>
        <pre>{error.message}</pre>
      </div>
    </Document>
  )
}
