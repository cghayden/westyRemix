import type { Coffee } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function FeaturedItems({ allCoffee }: { allCoffee: Coffee[] }) {
  return (
    <div className='p-4 w-full flex flex-col items-center '>
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
