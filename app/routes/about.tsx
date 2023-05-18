import { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { useState } from 'react'
import { AboutPage } from 'sanityTypes'
import Preview from '~/components/Preview'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import PageHeading from '~/components/styledComponents/PageHeading'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import { PortableText } from '@portabletext/react'
import { getClient } from '~/lib/sanity/getClient'

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
  const initialData = await getClient(preview).fetch(query)
  // .catch((err) => {
  //   console.log('error connecting to Sanity', err)
  //   throw new Error(err)
  // })
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
  const [data, setData] = useState(initialData)

  const aboutContent = filterDataToSingleItem(initialData, preview)

  if (!aboutContent)
    return (
      <ErrorContainer
        error={'There was an error retrieving the content for this page'}
      />
    )

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
      <PageHeading
        text={aboutContent.heading ? aboutContent.heading : 'about'}
      />
      {aboutContent.content && (
        <ContentContainer>
          <PortableText value={aboutContent.content} />
        </ContentContainer>
      )}
    </main>
  )
}
export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
