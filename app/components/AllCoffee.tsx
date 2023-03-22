import type { Coffee, CoffeePage } from '../../sanityTypes'
import CoffeeCard from './CoffeeCard'
import PageHeading from './styledComponents/PageHeading'

function AllCoffee({
  allCoffee,
  pageContent,
  referringPath,
  previewQuery,
}: {
  allCoffee: Coffee[]
  pageContent: CoffeePage
  referringPath: string
  previewQuery: string
}) {
  console.log('pageContent', pageContent)
  return (
    <main className='px-4 py-2 w-full flex flex-col items-center'>
      {pageContent.heading && (
        <div className='py-3'>
          <PageHeading text={pageContent.heading} />
        </div>
      )}
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
  )
}

export default AllCoffee
