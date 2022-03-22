import { useLoaderData, useParams, useCatch } from 'remix';
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
import type { Coffee } from '../../../sanityTypes';
import { useState } from 'react';
import Preview from '~/components/Preview';
import { getClient } from '~/lib/sanity/getClient';
import { PortableText, urlFor } from '~/lib/sanity/helpers';
import AddToCartForm from '~/components/AddToCartForm';

type LoaderData = {
  initialData: Coffee[];
  preview: boolean;
  singleCoffeeQuery?: string | null;
  queryParams?: { slug: string | undefined } | null;
};

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ request, params }) => {
  const requestUrl = new URL(request?.url);
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET;

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!

  //in this query, '$' character before 'slug' denotes that slug will is a string template, provided in second argument of the fetch function call
  const singleCoffeeQuery = `*[_type == "coffee" && slug.current == $slug]`;
  const queryParams = { slug: params.coffeeSlug };
  const initialData = await getClient(preview).fetch(
    singleCoffeeQuery,
    queryParams
  );
  if (!initialData) {
    throw new Response('Oh no - that Coffee was not found!', {
      status: 404,
      statusText: 'That coffee was not found',
    });
  }

  const data: LoaderData = {
    initialData,
    preview,
    singleCoffeeQuery: preview ? singleCoffeeQuery : null,
    queryParams: preview ? queryParams : null,
  };

  return data;
};

export default function CoffeeRoute() {
  let { initialData, preview, singleCoffeeQuery, queryParams } =
    useLoaderData<LoaderData>();

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData);

  //  A helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const coffee = filterDataToSingleItem(data, preview);

  return (
    <main className='h-screen'>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={singleCoffeeQuery}
          queryParams={queryParams}
        />
      )}
      {/* When working with draft content, optional chain _everything_ */}
      <div className='w-5/6 bg-slate-50 mx-auto max-w-[800px] p-4 mt-4 rounded shadow'>
        {coffee?.name && (
          <h2 className='text-3xl text-center font-HindSiliguri'>
            {coffee.name}
          </h2>
        )}
        {coffee?.roastLevel && (
          <p className='text-center'>{coffee.roastLevel} roast</p>
        )}
        {coffee?.image && (
          <img
            loading='lazy'
            src={urlFor(coffee.image).width(400).height(200)}
            width='400'
            height='200'
            alt={coffee?.name ?? ``}
            className='m-auto py-7'
          />
        )}
        {coffee?.descriptionLong && (
          <PortableText value={coffee.descriptionLong} />
        )}
        <div className='flex flex-wrap gap-4 justify-center'>
          <dl className='w-[300px] pr-5'>
            {coffee?.roastDate && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className=' font-ZenKaku justify-self-start text-lg mr-3'>
                    roasted
                  </dt>
                  <dd>{coffee.roastDate}</dd>
                </>
              </div>
            )}
            {coffee?.grade && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className='justify-self-start text-lg mr-3'>grade</dt>
                  <dd>{coffee.grade}</dd>
                </>
              </div>
            )}
            {coffee?.region && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className='justify-self-start text-lg mr-3'>region</dt>
                  <dd>{coffee.region}</dd>
                </>
              </div>
            )}
            {coffee?.cultivar && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className='justify-self-start text-lg mr-3'>cultivar</dt>
                  <dd>{coffee.cultivar}</dd>
                </>
              </div>
            )}
            {coffee?.elevation && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className='justify-self-start text-lg mr-3'>elevation</dt>
                  <dd>{coffee.elevation}</dd>
                </>
              </div>
            )}
            {coffee?.process && (
              <div className='flex py-2 ml-3 flex-row items-baseline'>
                <>
                  <dt className='justify-self-start text-lg mr-3'>process</dt>
                  <dd>{coffee.process}</dd>
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
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className='error-container'>
          Huh? What the heck is {params.coffeeSlug}?
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const { coffeeSlug } = useParams();
  return (
    <div className='error-container'>{`There was an error loading coffee ${coffeeSlug}. Sorry.`}</div>
  );
}

// export const meta: MetaFunction = ({
//   data,
// }: {
//   data: LoaderData | undefined;
// }) => {
//   if (!data) {
//     return {
//       title: 'No coffee',
//       description: 'No coffee found',
//     };
//   }
//   return {
//     title: `${data.coffee.name}`,
//     description: `Enjoy a hot cup of  "${data.coffee.name}" coffee`,
//   };
// };
