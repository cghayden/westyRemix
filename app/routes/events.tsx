import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import dayjs from 'dayjs'
import { useState } from 'react'
import { EventPreviewLi } from '~/components/EventPreviewLi'
import Preview from '~/components/Preview'
import ContentContainer from '~/components/styledContainers/ContentContainer'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { PortableText, urlFor } from '~/lib/sanity/helpers'
import sanity from '~/lib/sanity/sanity'
import { Event } from 'sanityTypes'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const query = `{
    "pageData": *[_type == 'eventsPage'],
    "events": *[_type == 'event']
  }`
  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await sanity.fetch(query).catch((err) => console.log(err))

  const events = filterDataToDrafts(initialData.events, preview)

  // const pageData = initialData.pageData
  const data = {
    initialData: { events, pageData: initialData.pageData },
    preview,
    query,
    queryParams: null,
  }
  return data
}

export default function eventsPage() {
  const { initialData, preview, query, queryParams } =
    useLoaderData<typeof loader>()
  console.log('initialData', initialData)

  const [data, setData] = useState(initialData)
  console.log('data', data)
  const pageData = filterDataToSingleItem(data.pageData, preview)

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
      <h1 className='text-center text-xl font-bold pt-6'>
        {pageData?.heading}
      </h1>
      <ul className='grid gap-5 mx-auto my-6 w-[95%] max-w-[800px]'>
        {data.events?.length > 0 &&
          data.events?.map((event) => (
            <EventPreviewLi
              heading={event.title}
              image={event.mainImage}
              date={event.date}
              content={event.description}
            />
          ))}
      </ul>
    </main>
  )
}
