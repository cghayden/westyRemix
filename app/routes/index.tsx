// import type { MetaFunction } from 'remix';
import { Link, LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';
import { PortableText } from '@portabletext/react';

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
  console.log('loader data', data);

  return (
    <div className='grid'>
      <img className='row-span-full col-span-full' src={data.imageUrl} />
      <div className='grid row-span-full col-span-full relative place-items-center  '>
        <div className='bg-slate-900/50 text-slate-50 p-6'>
          <PortableText value={data.overlayText1} />
        </div>
      </div>
    </div>
  );
}
