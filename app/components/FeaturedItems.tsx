import type { Coffee } from '../../sanityTypes'
import CoffeeCard from './CoffeeCard'
import PageHeading from './styledComponents/PageHeading'

function FeaturedItems({
  allCoffee,
  referringPath,
  previewQuery,
  featureHeading,
}: {
  allCoffee: Coffee[]
  referringPath: string
  previewQuery: string
  featureHeading: string
}) {
  return (
    <div className='px-4 py-2 w-full flex flex-col items-center'>
      <div className='py-2'>
        <PageHeading text={featureHeading} />
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
    </div>
  )
}

export default FeaturedItems
