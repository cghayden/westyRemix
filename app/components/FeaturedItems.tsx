import type { Coffee } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function FeaturedItems({ allCoffee }: { allCoffee: Coffee[] }) {
  return (
    <div className='p-4 w-full flex flex-col items-center '>
      <div>
        <h2>FeaturedItems</h2>
      </div>
      <div className='flex flex-col w-full  justify-center md:flex-row'>
        {allCoffee.map((coffee) => (
          <CoffeeCard coffee={coffee} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems;
