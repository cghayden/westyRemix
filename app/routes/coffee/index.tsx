import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import sanity from '~/lib/sanity/sanity'
import AllCoffee from '~/components/AllCoffee'
import { Coffee } from 'sanityTypes'
import Preview from '~/components/Preview'
import { useState } from 'react'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'

const query = `{
"coffee":  *[_type == "coffee"] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description,
slug{current},
price
},
"coffeePageContent": *[_type == "coffeePage"]
}
`

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const requestUrl = new URL(request?.url)
  const referringPath = requestUrl.pathname
  const previewQuery = requestUrl.search

  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await sanity.fetch(query).catch((err) => console.log(err))

  //  A helper function checks the returned documents
  // To show drafts if in preview mode, otherwise Published
  const coffee = filterDataToDrafts(initialData.coffee, preview)
  const coffeePageContent = filterDataToSingleItem(
    initialData.coffeePageContent,
    preview
  )
  const data = {
    coffee,
    coffeePageContent,
    referringPath,
    preview,
    previewQuery,
    query,
    queryParams: null,
  }
  return data
}

function coffeeIndex() {
  const {
    coffee,
    coffeePageContent,
    referringPath,
    preview,
    previewQuery,
    query,
    queryParams,
  } = useLoaderData<typeof loader>()

  // If `preview` mode is active, its component updates this state for us
  const [data, setData] = useState(coffee)

  // !! moved filterDataToDrafts to the server, because while in preview mode, groq store subscription causes a re-render with draft status stripped from _id, causing the sort order of the coffees to change, resulting in a UI-Jump when the coffee tiles reorder.

  return (
    <main>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={query}
          queryParams={queryParams}
        />
      )}
      <AllCoffee
        allCoffee={coffee}
        pageContent={coffeePageContent}
        referringPath={referringPath + '/'}
        previewQuery={previewQuery}
      />
    </main>
  )
}

export default coffeeIndex
