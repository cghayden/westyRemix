import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { getClient } from '~/lib/sanity/getClient'
import AllCoffee from '~/components/AllCoffee'
import Preview from '~/components/Preview'
import { useState } from 'react'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import type { Coffee, CoffeePage } from 'sanityTypes'

const query = `{
"coffee":  *[_type == "coffee" && stock > 0] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description,
slug{current},
price,
},
"coffeePageContent": *[_type == "coffeePage"]
}
`
export const loader = async ({ request }: LoaderArgs) => {
  const requestUrl = new URL(request?.url)
  const previewQuery = requestUrl.search

  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await getClient(preview)
    .fetch(query)
    .catch((err) => {
      console.log('err', err)
      throw Error('there was an error loading the items')
    })

  //  A helper function checks the returned documents
  // To show drafts if in preview mode, otherwise Published
  const coffee: Coffee[] = filterDataToDrafts(initialData.coffee, preview)
  const coffeePageContent: CoffeePage = filterDataToSingleItem(
    initialData.coffeePageContent,
    preview
  )
  const data = {
    coffee,
    coffeePageContent,
    preview,
    previewQuery,
    query,
    queryParams: null,
  }
  return data
}

export default function CoffeeIndex() {
  const {
    coffee,
    coffeePageContent,
    preview,
    previewQuery,
    query,
    queryParams,
  } = useLoaderData<typeof loader>()

  // If `preview` mode is active, its component updates this state for us
  const [data, setData] = useState(coffee)

  //  moved filterDataToDrafts to the server, because while in preview mode, groq store subscription causes a re-render with draft status stripped from _id, causing the sort order of the coffees to change, resulting in a UI-Jump when the coffee tiles reorder.

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
        previewQuery={previewQuery}
      />
    </main>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
