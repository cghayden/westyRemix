import { LoaderArgs, LoaderFunction } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { urlFor } from '~/lib/sanity/helpers'
import sanity from '~/lib/sanity/sanity'
import { PortableText } from '@portabletext/react'
import dayjs from 'dayjs'
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts'
import { useState } from 'react'
import Preview from '~/components/Preview'

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

      <ul className='grid gap-5 mx-auto my-6 w-[95%] max-w-[800px]'>
        {allPosts.length > 0 &&
          allPosts.map((post) => (
            <li key={post.title}>
              {/* Link has all ClassNames of ContentContainer except my-6 */}
              <Link
                to={`${referringPath}/${post.slug.current}/${previewQuery}`}
                className='bg-slate-50 p-4 rounded w-full mx-auto flex flex-col h-full place-items-center drop-shadow-md'
              >
                <h2 className='font-bold text-center pt-2 py-0 col-span-full'>
                  {post.title}
                </h2>
                <p className='text-xs pb-4'>
                  {dayjs(post.publishedAt).format('MMMM DD, YYYY')}
                </p>
                <div className='flex flex-col md:flex-row md:items-start md:justify-around items-center w-full'>
                  {post.mainImage && (
                    <img
                      className='max-w-[300]'
                      loading='lazy'
                      src={urlFor(post.mainImage).width(300).fit('max').url()}
                      // width='400'
                      // height='200'
                      alt={post.title ?? ``}
                    />
                  )}
                  <div className='text-center p-4'>
                    <PortableText value={post.excerpt} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
