import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { ContactPage } from 'sanityTypes'
import Preview from '~/components/Preview'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import { PortableText } from '~/lib/sanity/helpers'
import sanity from '~/lib/sanity/sanity'

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const query = `*[_type == 'contactPage']`

  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await sanity.fetch(query).catch((err) => console.log(err))

  const data = {
    initialData,
    preview,
    query,
    queryParams: null,
  }
  return data
}

export default function aboutPage() {
  const { initialData, preview, queryParams, query } =
    useLoaderData<typeof loader>()
  console.log('initialData', initialData)
  const [data, setData] = useState(initialData)

  const contactContent = filterDataToSingleItem(initialData, preview)
  console.log('contactContent', contactContent)

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
      <h1 className='text-2xl font-bold text-center my-4'>
        {contactContent.heading}
      </h1>
      <ContentContainer>
        <PortableText value={contactContent.content} />
      </ContentContainer>
    </main>
  )
}
