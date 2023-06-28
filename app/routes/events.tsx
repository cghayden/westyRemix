import type { LoaderArgs, LoaderFunction } from '@remix-run/node'
import type { Event, EventsPage } from 'sanityTypes'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { TwoColContainer } from '~/components/styledComponents/TwoColContainer'
import Preview from '~/components/Preview'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import PageHeading from '~/components/styledComponents/PageHeading'
import { getClient } from '~/lib/sanity/getClient'

export const loader = async ({ request }: LoaderArgs) => {
  const query = `{
    "pageData": *[_type == 'eventsPage'],
    "events": *[_type == 'event']
  }`
  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await getClient(preview).fetch(query)

  const events = filterDataToDrafts(initialData.events, preview)

  const data = {
    initialData: { events, pageData: initialData.pageData },
    preview,
    query,
    queryParams: null,
  }
  return data
}

export default function Events() {
  const { initialData, preview, query, queryParams } =
    useLoaderData<typeof loader>()

  const [data, setData] = useState(initialData)
  const pageData: EventsPage = filterDataToSingleItem(data.pageData, preview)

  // const pageData = filterDataToSingleItem(initialData.pageData, preview)
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

      {pageData?.heading && <PageHeading text={pageData?.heading} />}

      <ul className='flex flex-col mx-auto mt-6'>
        {data.events?.length > 0 &&
          data.events?.map((event: Event) => (
            <li key={event._id}>
              <TwoColContainer
                heading={event.title}
                image={event.mainImage}
                date={event.date}
                content={event.description}
              />
            </li>
          ))}
      </ul>
    </main>
  )
}
