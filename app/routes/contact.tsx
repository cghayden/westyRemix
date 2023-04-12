import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import Preview from '~/components/Preview'
import SocialLinks from '~/components/SocialLinks'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import PageHeading from '~/components/styledComponents/PageHeading'

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

export default function contactPage() {
  const { initialData, preview, queryParams, query } = useLoaderData()
  const [data, setData] = useState(initialData)

  const contactContent = filterDataToSingleItem(initialData, preview)
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
      <PageHeading text={contactContent.heading} />
      <ContentContainer>
        <PortableText value={contactContent.content} />
        <SocialLinks contactData={contactContent} />
      </ContentContainer>
    </main>
  )
}
