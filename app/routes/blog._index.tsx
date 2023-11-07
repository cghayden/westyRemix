import type { LoaderFunctionArgs } from '@remix-run/node'
import type { Post } from 'sanityTypes'
import { Link, useLoaderData } from '@remix-run/react'
import { getClient } from '~/lib/sanity/getClient.server'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { useState } from 'react'
import Preview from '~/components/Preview'
import { TwoColContainer } from '~/components/styledComponents/TwoColContainer'

const query = `*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  publishedAt,
  excerpt, 
  mainImage,
  slug
}`

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // Put site in preview mode if the right query param is used
  const requestUrl = new URL(request?.url)
  const previewQuery = requestUrl.search

  const preview =
    requestUrl.searchParams.get('preview') === process.env.SANITY_PREVIEW_SECRET

  const initialData: Post[] = await getClient(preview)
    .fetch(query)
    .catch((err: unknown) => console.log(err))

  const allPosts = filterDataToDrafts(initialData, preview)
  return {
    allPosts,
    preview,
    previewQuery,
    query,
    queryParams: null,
  }
}

export default function BlogIndex() {
  const { allPosts, preview, previewQuery, query, queryParams } =
    useLoaderData<typeof loader>()
  // If `preview` mode is active, its component updates this state for us
  const [data, setData] = useState(allPosts)

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
      <ul className='flex flex-col mx-auto mt-6'>
        {allPosts.length > 0 &&
          allPosts.map((post: Post) => (
            <li key={post.title}>
              {/* Link has all ClassNames of ContentContainer except my-6 */}
              <Link to={`${post?.slug?.current}/${previewQuery}`}>
                <TwoColContainer
                  heading={post?.title}
                  image={post?.mainImage}
                  date={post?.publishedAt}
                  content={post?.excerpt}
                />
              </Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
