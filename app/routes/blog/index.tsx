import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { urlFor } from '~/lib/sanity/helpers'
import sanity from '~/lib/sanity/sanity'
import { PortableText } from '@portabletext/react'
import dayjs from 'dayjs'
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

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  // Put site in preview mode if the right query param is used
  const requestUrl = new URL(request?.url)
  const previewQuery = requestUrl.search

  const referringPath = requestUrl.pathname
  const preview =
    requestUrl.searchParams.get(`preview`) === process.env.SANITY_PREVIEW_SECRET

  const initialData = await sanity.fetch(query)

  const allPosts = filterDataToDrafts(initialData, preview)
  return {
    allPosts,
    referringPath,
    preview,
    previewQuery,
    query,
    queryParams: null,
  }
}

export default function Index() {
  const { allPosts, referringPath, preview, previewQuery, query, queryParams } =
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
      <h1 className='text-center text-xl font-bold pt-4'>Blog</h1>

      <ul className='flex flex-col mx-auto mt-6'>
        {allPosts.length > 0 &&
          allPosts.map((post) => (
            <li key={post.title}>
              {/* Link has all ClassNames of ContentContainer except my-6 */}
              <Link
                to={`${referringPath}/${post.slug.current}/${previewQuery}`}
              >
                <TwoColContainer
                  heading={post.title}
                  image={post.mainImage}
                  date={post.publishedAt}
                  content={post.excerpt}
                />
              </Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
