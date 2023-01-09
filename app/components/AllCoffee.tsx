import type { Coffee } from '../../sanityTypes';
import CoffeeCard from './CoffeeCard';

function AllCoffee({
  allCoffee,
  referringPath,
  previewQuery,
}: {
  allCoffee: Coffee[];
  referringPath: string;
  previewQuery: string;
}) {
  return (
    <main className='px-4 py-2 w-full flex flex-col items-center'>
      <div className='py-3'>
        <h2 className='text-2xl font-medium'>Our Coffees</h2>
      </div>
      <div className='py-2 flex flex-wrap justify-center gap-4'>
        {allCoffee.map((coffee) => (
          <CoffeeCard
            key={coffee.name}
            coffee={coffee}
            referringPath={referringPath}
            previewQuery={previewQuery}
          />
        ))}
      </div>
    </main>
  );
}

export default AllCoffee;
