import { useLoaderData, useParams, useCatch, Form } from 'remix';
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix';
import sanity from '~/lib/sanity/sanity';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
import type { Coffee, SanityImageType } from '../../../sanityTypes';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

type LoaderData = {
  initialData: Coffee[];
  preview: boolean;
};

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ request, params }) => {
  const requestUrl = new URL(request?.url);
  console.log('requestUrl', requestUrl);
  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET;

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!

  //in this query, '$' character before 'slug' denotes that slug will is a string template, provided in second argument of the fetch function call
  const singleCoffeeQuery = `*[_type == "coffee" && slug.current == $slug]`;
  const initialData = await sanity.fetch(singleCoffeeQuery, {
    slug: params.coffeeSlug,
  });
  if (!initialData) {
    throw new Response('Oh no - that Coffee was not found!', {
      status: 404,
      statusText: 'That coffee was not found',
    });
  }
  console.log('initialData', initialData);

  // configure images
  // const imageBuilder = imageUrlBuilder(sanity);
  // function urlFor(source: SanityImageType) {
  //   return imageBuilder.image(source);
  // }
  // const url = urlFor(coffeeData.image).url();

  const data: LoaderData = { initialData, preview };

  return data;
};

export default function CoffeeRoute() {
  let { initialData, preview } = useLoaderData<LoaderData>();

  //  A helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const coffee = filterDataToSingleItem(initialData, preview);

  return (
    <main className='bg-slate-50 h-screen'>
      <p>single coffee page</p>
      {preview ? <div>Preview Mode Enabled</div> : null}

      <h2 className='text-3xl text-center'>{coffee.name}</h2>
      <p>{coffee.roastLevel}</p>
      {/* 
      {coffeeData.coffee.flavorProfile && (
        <p>{coffeeData.coffee.flavorProfile}</p>
      )}
      <p>{coffeeData.coffee.roastDate}</p> */}
      {/* null check on description long to appease TS */}
      {coffee.descriptionLong && (
        <PortableText value={coffee.descriptionLong} />
      )}
      {/* 
      <img src={coffeeData.imageUrl} /> 
      */}
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
          Huh? What the heck is {params.jokeId}?
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
  const { jokeId: coffeeSlug } = useParams();
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
