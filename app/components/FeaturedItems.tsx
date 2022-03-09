import type { Coffee } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function FeaturedItems({ allCoffee }: { allCoffee: Coffee[] }) {
  return (
    <div className='p-4'>
      <h2>FeaturedItems</h2>
      {allCoffee.map((coffee) => (
        <CoffeeCard coffee={coffee} />
      ))}
    </div>
  );
}

export default FeaturedItems;
