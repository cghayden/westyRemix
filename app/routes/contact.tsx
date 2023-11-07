import type { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { useState } from 'react'
import Preview from '~/components/Preview'
import SocialLinks from '~/components/SocialLinks'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'
import PageHeading from '~/components/styledComponents/PageHeading'

import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import { PortableText } from '@portabletext/react'
import { getClient } from '~/lib/sanity/getClient.server'
import type { ContactPage } from 'sanityTypes'

type LoaderData = {
  contactContent: ContactPage
  preview: boolean
  query?: string | null
  queryParams?: { slug: string | undefined } | null
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const query = `*[_type == 'contactPage']`

  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET
  const initialData = await getClient(preview).fetch(query)

  const contactContent: ContactPage = filterDataToSingleItem(
    initialData,
    preview
  )

  const data = {
    contactContent,
    preview,
    query,
    queryParams: null,
  }
  return data
}

export default function Contact() {
  const { contactContent, preview, queryParams, query } =
    useLoaderData<LoaderData>()
  const [data, setData] = useState(contactContent)

  if (!contactContent)
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
      {contactContent?.heading && (
        <PageHeading text={contactContent?.heading} />
      )}
      <ContentContainer>
        <PortableText value={contactContent?.content} />
        <SocialLinks
          instagramHandle={contactContent?.instagramHandle}
          twitterHandle={contactContent?.twitterHandle}
          facebookId={contactContent?.facebookId}
        />
      </ContentContainer>
    </main>
  )
}
export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
