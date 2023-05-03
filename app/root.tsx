import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useCatch,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'

import Header from './components/Header'
import styles from './styles/tailwind.css'
import sanity from './lib/sanity/sanity'
import { CartProvider } from './context/useCart'
import { ThemeProvider } from './context/ThemeContext'
import Preview from './components/Preview'
import { useState } from 'react'
import { filterDataToSingleItem } from './lib/sanity/filterDataToSingleItem'
import Footer from './components/Footer'
import { ContactPage, SiteSettings } from 'sanityTypes'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => {
  const description = `Sample Ecommerce Site`
  return {
    description,
  }
}

export interface InitialData {
  siteSettings: SiteSettings[]
  contactData: ContactPage[]
}

export type LoaderData = {
  initialData: InitialData
  siteSettings: SiteSettings
  contactData: ContactPage
  preview: boolean
  query: string | null
  queryParams: string | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const query = `{
    "siteSettings": *[_type == "siteSettings"] {
      _id,
      backgroundColor {alpha, hsl, hex},
      pageTextColor {alpha, hsl, hex},
      productTileBackgroundColor {alpha, hsl, hex},
      productTileTextColor {alpha, hsl, hex}, 
      "backgroundImageUrl" : backgroundImage.asset->url
  },
  "contactData": *[_type == 'contactPage']
} `
  const requestUrl = new URL(request?.url)
  const preview: boolean =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET

  const initialData: InitialData = await sanity
    .fetch(query)
    .catch((err) => console.log(err))

  const siteSettings = filterDataToSingleItem(initialData.siteSettings, preview)

  const data: LoaderData = {
    initialData,
    siteSettings,
    contactData: initialData.contactData[0],
    preview,
    query: preview ? query : null,
    queryParams: null,
  }
  return data
}

type DocProps = {
  children: React.ReactNode | undefined
  title?: string
}

function Document({ children, title = `Westy Remix` }: DocProps) {
  const { siteSettings, preview, query, queryParams } =
    useLoaderData<LoaderData>()
  const [data, setData] = useState(siteSettings)

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
        className='min-h-screen m-0 flex flex-col font-HindSiliguri'
        style={{
          background: `${
            siteSettings.backgroundImageUrl
              ? `url(${siteSettings.backgroundImageUrl})`
              : siteSettings?.backgroundColor?.hex
          }`,

          color: `${siteSettings?.pageTextColor?.hex}`,
          overscrollBehavior: 'none',
        }}
      >
        <ThemeProvider siteSettings={siteSettings}>
          <CartProvider initialCart={[]}>{children}</CartProvider>
        </ThemeProvider>
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
      <Footer />
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

// export function ErrorBoundary({ error }: { error: Error }) {
//   console.error(error)
//   return (
//     <Document title='Uh-oh!'>
//       <Header />
//       <div className='error-container'>
//         <h1>App Error</h1>
//         <pre>{error.message}</pre>
//       </div>
//     </Document>
//   )
// }

export function ErrorBoundary() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    return (
      <Document title={`${error.status} ${error.statusText}`}>
        <div className='error-container'>
          <h1>
            {error.status} {error.statusText}
          </h1>
        </div>
      </Document>
    )
  }
  const errorMessage = error instanceof Error ? error.message : 'Unknown error'
  return (
    <Document title='Uh-oh!'>
      <Header />

      <div>
        <h1>App Error</h1>
        <pre>{errorMessage}</pre>
      </div>
    </Document>
  )
}
