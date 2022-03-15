import { LoaderFunction, useLoaderData } from 'remix';
import sanity from '~/utils/sanity';
import type { Coffee, LandingPage, SiteSettings } from '../../sanityTypes';

import HomeHero from '~/components/HomeHero';
import FeaturedItems from '~/components/FeaturedItems';

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  backgroundColor,
  textColor
} `;

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
  siteSettings: SiteSettings;
}

export const loader: LoaderFunction = async () => {
  const siteSettings: SiteSettings = await sanity.fetch(siteSettingsQuery);
  const content = await sanity.fetch(contentQuery);
  const data: LoaderData = {
    siteSettings,
    coffee: content.coffee,
    heroContent: content.heroContent,
  };
  return data;
};

export default function Index() {
  const data = useLoaderData<LoaderData>();
  console.log('data', data);
  return (
    <div>
      <HomeHero heroContent={data.heroContent} />
      <FeaturedItems allCoffee={data.coffee} siteSettings={data.siteSettings} />
    </div>
  );
}
