import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';

const contentQuery = `{
  "hero": *[_id == "homePage" ] {
  "imageUrl": bgImage1.asset->url,
  overlayText1
  },
  "coffee": *[_type == "coffee"]
}`;

export const loader: LoaderFunction = async () => {
  const data = await sanity.fetch(contentQuery);
  // console.log('data', data);
  return data;
};
import HomeHero from '~/components/HomeHero';
import FeaturedItems from '~/components/FeaturedItems';

export default function Index() {
  const data = useLoaderData();
  console.log('data', data);
  return (
    <div>
      <HomeHero />
      <FeaturedItems />
    </div>
  );
}
