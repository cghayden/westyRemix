import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import sanity from '~/lib/sanity/sanity';
import AllCoffee from '~/components/AllCoffee';
import { Coffee } from 'sanityTypes';

const query = `
*[_type == "coffee" && !(_id in path('drafts.**'))] {
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
}

export const loader: LoaderFunction = async ({ request }) => {
  const requestUrl = new URL(request?.url);
  const referringPath = requestUrl.pathname;
  const coffee = await sanity.fetch(query).catch((err) => console.log(err));
  const data: LoaderData = { coffee, referringPath };
  return data;
};

function coffeeIndex() {
  const data = useLoaderData();

  return (
    <div>
      <AllCoffee
        allCoffee={data.coffee}
        referringPath={data.referringPath + '/'}
      />
    </div>
  );
}

export default coffeeIndex;
