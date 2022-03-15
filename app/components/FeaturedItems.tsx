import type { Coffee, SiteSettings } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function FeaturedItems({
  allCoffee,
  siteSettings,
}: {
  allCoffee: Coffee[];
  siteSettings: SiteSettings;
}) {
  console.log('FItems siteSettings', siteSettings);
  const bgColor = `bg-[${siteSettings.backgroundColor.hex}]`;
  return (
    <div
      className='p-4 w-full flex flex-col items-center'
      style={{ backgroundColor: siteSettings.backgroundColor.hex }}
    >
      <div>
        <h2 className='text-2xl font-medium'>Featured Items Heading</h2>
      </div>
      <div className='flex flex-wrap justify-center'>
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
