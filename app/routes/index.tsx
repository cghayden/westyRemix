import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import sanity from '~/lib/sanity/sanity'
import HomeHero from '~/components/HomeHero'
import FeaturedItems from '~/components/FeaturedItems'
import { useState } from 'react'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import Preview from '~/components/Preview'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const pageQuery = `{
    "heroContent": *[_type == "landingPage" ] {
      _id,
    "imageUrl": bgImage1.asset->url,
    overlayText1,
    coffeeSectionHeading,
    coffeeText,
    transitionText1
    },
    "coffee": *[_type == "coffee"] {
      _id,
      name, 
      roastLevel,
      description,
      roastDate,
      stock, 
      slug{current}
    }
  }`
  const requestUrl = new URL(request?.url)
  const previewQuery = requestUrl.search
  const referringPath = requestUrl.pathname
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET

  const initialData = await sanity.fetch(pageQuery)

  const heroContent = filterDataToSingleItem(initialData.heroContent, preview)
  const coffee = filterDataToDrafts(initialData.coffee, preview)

  const data = {
    initialData: { coffee, heroContent },
    referringPath: referringPath,
    preview,
    previewQuery,
    pageQuery,
    queryParams: null,
  }
  return data
}

export default function Index() {
  const {
    initialData,
    preview,
    pageQuery,
    previewQuery,
    queryParams,
    referringPath,
  } = useLoaderData<typeof loader>()

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData)

  return (
    <main className='w-min-[320px] p-4'>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={pageQuery}
          queryParams={queryParams}
        />
      )}

      <HomeHero heroContent={initialData.heroContent} />
      <FeaturedItems
        featureHeading={initialData.heroContent.coffeeSectionHeading}
        allCoffee={initialData?.coffee}
        referringPath={referringPath + 'coffee/'}
        previewQuery={previewQuery}
      />
    </main>
  )
}
