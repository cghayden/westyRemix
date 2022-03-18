import { useLoaderData, useParams, useCatch, Form } from 'remix';
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix';
import sanity from '~/utils/sanity';
import type { Coffee, SanityImageType } from '../../../sanityTypes';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

type LoaderData = {
  coffee: Coffee;
  imageUrl: string;
};

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.coffeeSlug;
  const singleCoffeeQuery = `*[slug.current == "${slug}"]`;
  const [coffee] = await sanity.fetch(singleCoffeeQuery);
  if (!coffee) {
    throw new Response('Oh no - that Coffee was not found!', {
      status: 404,
      statusText: 'That coffee was not found',
    });
  }

  // configure image
  const imageBuilder = imageUrlBuilder(sanity);
  function urlFor(source: SanityImageType) {
    return imageBuilder.image(source);
  }
  const url = urlFor(coffee.image).url();

  const data: LoaderData = { coffee, imageUrl: url };
  return data;
};

export default function CoffeeRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <main className='bg-slate-50 h-screen'>
      <h2 className='text-3xl text-center'>{data.coffee.name}</h2>
      <p>{data.coffee.roastLevel}</p>
      {data.coffee.flavorProfile && <p>{data.coffee.flavorProfile}</p>}
      <p>{data.coffee.roastDate}</p>
      {/* null check on description long to appease TS */}
      {data.coffee.descriptionLong && (
        <PortableText value={data.coffee.descriptionLong} />
      )}
      <img src={data.imageUrl} />
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
