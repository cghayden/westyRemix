import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { AboutPage } from 'sanityTypes'
import Preview from '~/components/Preview'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import { PortableText } from '~/lib/sanity/helpers'
import sanity from '~/lib/sanity/sanity'

type LoaderData = {
  initialData: AboutPage[]
  preview: boolean
  query?: string | null
  queryParams?: { slug: string | undefined } | null
}

export const loader: LoaderFunction = async ({ request }) => {
  const query = `*[_type == 'aboutPage']`
  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await sanity.fetch(query).catch((err) => console.log(err))
  const data: LoaderData = {
    initialData,
    preview,
    query,
    queryParams: null,
  }
  return data
}

export default function aboutPage() {
  const { initialData, preview, queryParams, query } =
    useLoaderData<LoaderData>()
  console.log('initialData', initialData)
  const [data, setData] = useState(initialData)

  const aboutContent = filterDataToSingleItem(initialData, preview)
  console.log('aboutContent', aboutContent)

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
        {aboutContent.heading}
      </h1>
      <ContentContainer>
        <PortableText value={aboutContent.content} />
      </ContentContainer>
    </main>
  )
}
