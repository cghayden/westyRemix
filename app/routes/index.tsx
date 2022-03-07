// import type { MetaFunction } from 'remix';
import { Link, LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';
// import { PortableText } from '@portabletext/react';

const contentQuery = `
  *[_id == "homePage" ] {
  "imageUrl": bgImage1.asset->url,
  overlayText1
  }`;

// type LoaderData = {

// }
export const loader: LoaderFunction = async () => {
  const data = await sanity.fetch(contentQuery);
  return data;
};

export default function Index() {
  const [data] = useLoaderData();
  console.log('data', data);

  return (
    <div>
      <h1 className='text-xl'>Hoome</h1>
      <img src={data.imageUrl} />
      {/* <PortableText value={data.overlayText1} /> */}
    </div>
  );
}
