import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';
import type { Coffee, LandingPage } from '../../sanityTypes';

import HomeHero from '~/components/HomeHero';
import FeaturedItems from '~/components/FeaturedItems';

const contentQuery = `{
  "heroContent": *[_id == "homePage" ] {
  "imageUrl": bgImage1.asset->url,
  overlayText1
  }[0],
  "coffee": *[_type == "coffee"] {
    name, 
    roastLevel,
    description,
    roastDate
  }
}`;

interface LoaderData {
  coffee: Coffee[];
  heroContent: LandingPage;
}

export const loader: LoaderFunction = async () => {
  const content = await sanity.fetch(contentQuery);
  const data: LoaderData = {
    coffee: content.coffee,
    heroContent: content.heroContent,
  };
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  return (
    <main>
      <HomeHero heroContent={data.heroContent} />
      <FeaturedItems allCoffee={data.coffee} />
    </main>
  );
}
