import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/lib/sanity/sanity';
import AllCoffee from '~/components/AllCoffee';

const query = `
*[_type == "coffee" && !(_id in path('drafts.**'))] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description,
slug{current}
}
`;

export const loader: LoaderFunction = async () => {
  const coffee = await sanity.fetch(query);
  return coffee;
};

function coffeeIndex() {
  const data = useLoaderData();
  return <AllCoffee allCoffee={data} />;
}

export default coffeeIndex;
