import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import sanity from '~/lib/sanity/sanity';
import AllCoffee from '~/components/AllCoffee';
import { Coffee } from 'sanityTypes';
import Preview from '~/components/Preview';
import { useState } from 'react';
import { filterDataToDrafts } from '~/lib/sanity/filterDataToDrafts';

const query = `
*[_type == "coffee"] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description,
slug{current},
price
}
`;

interface LoaderData {
  coffee: Coffee[];
  referringPath: string;
  previewQuery: string;
  preview: boolean;
  query: string | null;
  queryParams?: { slug: string | undefined } | null;
}

export const loader: LoaderFunction = async ({ request }) => {
  const requestUrl = new URL(request?.url);
  const referringPath = requestUrl.pathname;
  const previewQuery = requestUrl.search;

  const preview =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET;
  const initialData = await sanity
    .fetch(query)
    .catch((err) => console.log(err));
  console.log('initialData', initialData);

  //  A helper function checks the returned documents
  // To show drafts if in preview mode, otherwise Published
  const coffee = filterDataToDrafts(initialData, preview);

  const data: LoaderData = {
    coffee,
    referringPath,
    preview,
    previewQuery,
    query,
    queryParams: null,
  };
  return data;
};

function coffeeIndex() {
  const { coffee, referringPath, preview, previewQuery, query, queryParams } =
    useLoaderData<LoaderData>();
  console.log('queryParams', queryParams);

  // If `preview` mode is active, its component updates this state for us
  const [data, setData] = useState(coffee);

  // !! moved filterDataToDrafts to the server, because while in preview mode, groq store subscription causes a re-render with draft status stripped from _id, causing the sort order of the coffees to change, resulting in a UI-Jump when the coffee tiles reorder.

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
      <AllCoffee
        allCoffee={coffee}
        referringPath={referringPath + '/'}
        previewQuery={previewQuery}
      />
    </main>
  );
}

export default coffeeIndex;
