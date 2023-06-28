import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import sanity from '~/lib/sanity/sanity'
import HomeHero from '~/components/HomeHero'
import FeaturedItems from '~/components/FeaturedItems'
import { useState } from 'react'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import Preview from '~/components/Preview'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import type { Coffee, LandingPage } from 'sanityTypes'
type LoaderData = {
  initialData: { coffee: Coffee[]; pageContent: LandingPage }
  preview: boolean
  query?: string | null
  queryParams?: { slug: string | undefined } | null
  referringPath: string
  previewQuery: string
}
export const loader = async ({ request }: LoaderArgs) => {
  const query = `{
    "pageContent": *[_id == "homePage" ] {
      _id,
    "imageUrl": bgImage1.asset->url,
    overlayText1,
    coffeeSectionHeading,
    coffeeText,
    transitionText1
    },
    "coffee": *[_type == "coffee" && stock > 0] {
      _id,
      name,
      roastLevel,
      description,
      roastDate,
      stock, 
      slug{current},
      price
    }
  }`

  const requestUrl = new URL(request?.url)
  const previewQuery = requestUrl.search
  const referringPath = requestUrl.pathname
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET

  const initialData = await sanity.fetch(query)

  const pageContent: LandingPage = filterDataToSingleItem(
    initialData.pageContent,
    preview
  )
  const coffee: Coffee[] = filterDataToDrafts(initialData.coffee, preview)

  const data: LoaderData = {
    initialData: { coffee, pageContent },
    referringPath,
    preview,
    previewQuery,
    query,
    queryParams: null,
  }
  return data
}

export default function Index() {
  const {
    initialData,
    preview,
    query,
    previewQuery,
    queryParams,
    referringPath,
  } = useLoaderData<LoaderData>()

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData)

  return (
    <main className='w-min-[320px] p-4'>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={query}
          queryParams={queryParams}
        />
      )}

      <HomeHero pageContent={initialData?.pageContent} />
      <FeaturedItems
        featureHeading={initialData?.pageContent?.coffeeSectionHeading}
        allCoffee={initialData.coffee}
        referringPath={referringPath + 'coffee/'}
        previewQuery={previewQuery}
      />
    </main>
  )
}
export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
