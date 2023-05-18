import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem'
import type { Coffee } from '../../sanityTypes'
import { useState } from 'react'
import Preview from '~/components/Preview'
import { getClient } from '~/lib/sanity/getClient'
import { urlFor } from '~/lib/sanity/helpers'
import { PortableText } from '@portabletext/react'
import AddToCartForm from '~/components/AddToCartForm'
import ContentContainer from '~/components/styledComponents/ContentContainer'
import dayjs from 'dayjs'

type LoaderData = {
  initialData: Coffee[]
  preview: boolean
  singleCoffeeQuery?: string | null
  queryParams?: { slug: string | undefined } | null
}

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ request, params }) => {
  const requestUrl = new URL(request?.url)
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!

  //in this query, '$' character before 'slug' denotes that slug is a string template, provided in second argument of the fetch function call
  const singleCoffeeQuery = `*[_type == "coffee" && slug.current == $slug]`
  const queryParams = { slug: params.coffeeSlug }
  const initialData = await getClient(preview).fetch(
    singleCoffeeQuery,
    queryParams
  )

  if (!initialData || !initialData.length) {
    throw new Response('Oh no - that Coffee was not found!', {
      status: 404,
      statusText: 'That coffee was not found',
    })
  }

  const data: LoaderData = {
    initialData,
    preview,
    singleCoffeeQuery: preview ? singleCoffeeQuery : null,
    queryParams: preview ? queryParams : null,
  }

  return data
}

export default function CoffeeRoute() {
  let { initialData, preview, singleCoffeeQuery, queryParams } =
    useLoaderData<LoaderData>()

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData)

  //  A helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const coffee = filterDataToSingleItem(data, preview)
  const imageSrc = urlFor(coffee.image).width(400).height(200)
  return (
    <main>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={singleCoffeeQuery}
          queryParams={queryParams}
        />
      )}
      <ContentContainer>
        {coffee?.name && (
          <h2 className='p-4 text-3xl text-center'>{coffee.name}</h2>
        )}
        {coffee?.roastLevel && (
          <p className='text-center'>{coffee.roastLevel} roast</p>
        )}
        {coffee?.image && (
          <img
            loading='lazy'
            src={imageSrc}
            width='400'
            height='200'
            alt={coffee?.name ?? ``}
            className='m-auto py-7'
          />
        )}
        <div className='divide-y divide-solid'>
          {coffee?.descriptionLong && (
            <div className='label__longDescription p-4 text-justify max-w-xl mx-auto'>
              <PortableText value={coffee.descriptionLong} />
            </div>
          )}
          <div className='label__detailListAndForm grid place-items-center place-content-center grid-cols-autoFit2 w-full max-w-[700px] mx-auto'>
            <dl className='label__coffeeDetailsList p-3 self-start'>
              {coffee?.roastDate && (
                <div className='flex flex-row items-baseline'>
                  <>
                    <dt className='w-20 text-slate-900 text-left text-lg mr-3'>
                      roasted
                    </dt>
                    <dd className='text-amber-800'>
                      {dayjs(coffee.roastDate).format('MMMM DD')}
                    </dd>
                  </>
                </div>
              )}
              {coffee?.grade && (
                <div className='flex flex-row items-baseline'>
                  <>
                    <dt className='w-20 w- text-slate-900 text-left text-lg mr-3'>
                      grade
                    </dt>
                    <dd className='text-amber-800'>{coffee.grade}</dd>
                  </>
                </div>
              )}
              {coffee?.region && (
                <div className='flex flex-row items-baseline'>
                  <>
                    <dt className='w-20 text-slate-900 text-left text-lg mr-3'>
                      region
                    </dt>
                    <dd className='text-amber-800'>{coffee.region}</dd>
                  </>
                </div>
              )}
              {coffee?.cultivar && (
                <div className='flex flex-row items-baseline'>
                  <>
                    post{' '}
                    <dt className='w-20 text-slate-900 text-left text-lg mr-3'>
                      cultivar
                    </dt>
                    <dd className='text-amber-800'>{coffee.cultivar}</dd>
                  </>
                </div>
              )}
              {coffee?.elevation && (
                <div className='flex flex-row items-baseline'>
                  <>
                    post{' '}
                    <dt className='w-20 text-slate-900 text-left text-lg mr-3'>
                      elevation
                    </dt>
                    <dd className='text-amber-800'>{coffee.elevation}</dd>
                  </>
                </div>
              )}
              {coffee?.process && (
                <div className='flex flex-row items-baseline'>
                  <>
                    post{' '}
                    <dt className='w-20 text-slate-900 text-left text-lg mr-3'>
                      process
                    </dt>
                    <dd className='text-amber-800'>{coffee.process}</dd>
                  </>
                </div>
              )}
            </dl>

            {coffee?.stock && coffee?.stock > 0 ? (
              <AddToCartForm coffee={coffee} />
            ) : (
              <p>out of stock</p>
            )}
          </div>
        </div>
      </ContentContainer>
    </main>
  )
}