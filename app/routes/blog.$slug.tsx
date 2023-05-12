import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useRouteError } from '@remix-run/react'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import type { Post } from '../../sanityTypes'
import { useState } from 'react'
import Preview from '~/components/Preview'
import { getClient } from '~/lib/sanity/getClient'
import { PortableText, urlFor } from '~/lib/sanity/helpers'
import ContentContainer from '~/components/styledComponents/ContentContainer'

import dayjs from 'dayjs'
import { ErrorContainer } from '~/components/styledComponents/ErrorContainer'

type LoaderData = {
  initialData: Post[]
  preview: boolean
  singlePostQuery?: string | null
  queryParams?: { slug: string | undefined } | null
}

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ request, params }) => {
  // throw new Error('testing error boundary')
  const requestUrl = new URL(request?.url)
  const preview: boolean =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!

  //in this query, '$' character before 'slug' denotes that slug is a string template, provided in second argument of the fetch function call
  const singlePostQuery = `*[_type == "post" && slug.current == $slug]`
  const queryParams = { slug: params.slug }
  const initialData = await getClient(preview)
    .fetch(singlePostQuery, queryParams)
    .catch((err) => {
      throw new Error(err)
    })
  if (!initialData || !initialData.length) {
    throw new Response('Oh no - that Post was not found!', {
      status: 404,
      statusText: 'That post was not found',
    })
  }

  const data: LoaderData = {
    initialData,
    preview,
    // If `preview` mode is active, we'll need these for live updates:
    singlePostQuery: preview ? singlePostQuery : null,
    queryParams: preview ? queryParams : null,
  }

  return data
}

export default function CoffeeRoute() {
  let { initialData, preview, singlePostQuery, queryParams } =
    useLoaderData<LoaderData>()

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData)

  //  A helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const post: Post = filterDataToSingleItem(data, preview)

  return (
    <main>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={singlePostQuery}
          queryParams={queryParams}
        />
      )}
      {/* When working with draft content, optional chain _everything_ */}
      <ContentContainer>
        {post?.title && (
          <h2 className='p-4 text-3xl text-center'>{post.title}</h2>
        )}
        {post?.publishedAt && (
          <p className='text-xs text-center pb-4'>
            {dayjs(post.publishedAt).format('MMMM DD, YYYY')}
          </p>
        )}
        {post?.mainImage && (
          <img
            loading='lazy'
            src={urlFor(post.mainImage).fit('max').url()}
            alt={post?.title ?? ``}
            className='m-auto py-7 max-w-lg w-full'
          />
        )}
        <PortableText value={post.body} />
      </ContentContainer>
    </main>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  return <ErrorContainer error={error} />
}
