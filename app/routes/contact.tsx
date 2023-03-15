import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { ContactPage } from 'sanityTypes'
import Preview from '~/components/Preview'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import FacebookSvg from '~/icons/FacebookSvg'
import InstagramSvg from '~/icons/InstagramSvg'
import TwitterSvg from '~/icons/TwitterSvg'
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
        <div className='flex justify-center items-center my-1'>
          <a
            className='mx-2'
            href='https://www.instagram.com/coreygenehayden'
            rel='noopener noreferrer'
            target='_blank'
            aria-label='Link to instagram'
          >
            <span>
              <InstagramSvg w={'24'} h={'24'} />
            </span>
          </a>
          <a
            className='mx-2'
            href='https://www.twitter.com'
            rel='noopener noreferrer'
            target='_blank'
            aria-label='Link to twitter'
          >
            <span>
              <TwitterSvg w={'30'} h={'30'} />
            </span>
          </a>
          <a
            className='mx-2'
            href='https://www.facebook.com/cg.hayden'
            rel='noopener noreferrer'
            target='_blank'
            aria-label='Link to facebook'
          >
            <span>
              <FacebookSvg w={'30'} h={'30'} />
            </span>
          </a>
        </div>
      </ContentContainer>
    </main>
  )
}
