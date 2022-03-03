import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';

const query = `
*[_type == "coffee"] {
  _id,
  name,
  stock,
  roastlevel,
  description
}
`;
export const loader: LoaderFunction = async () => {
  const coffee = await sanity.fetch(query);
  return coffee;
};

function coffeePage() {
  const data = useLoaderData();
  console.log('data', data);
  return <div>coffee Page</div>;
}

export default coffeePage;
