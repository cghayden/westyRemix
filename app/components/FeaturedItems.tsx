import type { Coffee } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function FeaturedItems({ allCoffee }: { allCoffee: Coffee[] }) {
  return (
    <div className='px-4 py-2 w-full flex flex-col items-center'>
      <div className='py-2'>
        <h2 className='text-2xl font-medium'>Featured Items Heading</h2>
      </div>
      <div className='py-2 flex flex-wrap justify-center gap-4'>
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee.name} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
