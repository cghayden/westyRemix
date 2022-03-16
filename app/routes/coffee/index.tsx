import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';
import AllCoffee from '~/components/AllCoffee';
import { Coffee } from 'sanityTypes';

const query = `
*[_type == "coffee"] {
  _id,
  name,
  stock,
  roastLevel,
  roastDate,
  description
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
