import dayjs from 'dayjs';
import { Link } from 'remix';
import type { Coffee } from '../../sanityTypes';

function CoffeeCard({ coffee }: { coffee: Coffee }) {
  // const { stock } = useCurrentStock(coffee._id);

  return (
    <Link to={`coffee/${coffee?.slug?.current}`}>
      <div className='p-4 border-8 border-green-200 bg-green-500 rounded shadow text-green-50 w-[320px] h-[320px] mb-1 flex flex-col justify-between'>
        <div className='h-1/6 grid place-items-center'>
          <h2 className='text-2xl font-normal'>{coffee.name}</h2>
        </div>
        <div className='flex flex-col flex-grow justify-center space-y-4'>
          {coffee.roastLevel && <p>{coffee.roastLevel} roast</p>}
          {coffee.description && <p>{coffee.description}</p>}
          {coffee.roastDate && (
            <p>roasted {dayjs(coffee.roastDate).format('MMMM DD')}</p>
          )}
        </div>
        <div className='h-1/6'>
          <p>3 in stock</p>
        </div>
      </div>
    </Link>
  );
}

export default CoffeeCard;
