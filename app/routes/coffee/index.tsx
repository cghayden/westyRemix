import { LoaderFunction, useFetcher, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';

// const query = `
// *[_type == "coffee"] {
//   _id,
//   name,
//   stock,
//   roastlevel,
//   description
// }
// `;
// export const loader: LoaderFunction = async () => {
//   const coffee = await sanity.fetch(query);
//   return coffee;
// };

function coffeeIndex() {
  // const data = useLoaderData();
  const data = useFetcher();
  console.log('fetcher data', data);
  return <div>coffee index</div>;
}

export default coffeeIndex;
