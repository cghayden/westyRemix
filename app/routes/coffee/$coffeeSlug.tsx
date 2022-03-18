import { useLoaderData, useParams, useCatch, redirect, Form } from 'remix';
import type { ActionFunction, LoaderFunction, MetaFunction } from 'remix';
import sanity from '~/utils/sanity';
import type { Coffee } from '../../../sanityTypes';
import { PortableText } from '@portabletext/react';
import { Key } from 'react';

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
  return coffee;
};

export default function CoffeeRoute() {
  const coffee: Coffee = useLoaderData();
  console.log('single coffee data', coffee);
  return (
    <div>
      single coffee
      <h3>{coffee.name}</h3>
      <p>{coffee.roastLevel}</p>
      <p>{coffee.roastDate}</p>
      {/* null check on description long to appease TS */}
      {coffee.descriptionLong && (
        <PortableText value={coffee.descriptionLong} />
      )}
    </div>
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
