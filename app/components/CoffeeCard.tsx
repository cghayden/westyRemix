import dayjs from 'dayjs'
import { Link } from '@remix-run/react'
import type { Coffee } from '../../sanityTypes'
import { useContext } from 'react'
import { ThemeContext } from '~/context/ThemeContext'
import { darken } from '~/lib/colorFuncs'

// this card is a link that routes to the specific page for that coffee.  The link is used on the home page ('/') AND on the all coffees page ('/coffee), each of which have a different base url, so the correct url href passed to Link is constructed at the same component as the loader, where the requesting url is obtained, and in the case of the home page, a relative '/coffee' is prepended to the slug, whereas at the /coffee index, just a '/' is prepended

function CoffeeCard({
  coffee,
  referringPath,
  previewQuery,
}: {
  coffee: Coffee
  referringPath: string
  previewQuery: string
}) {
  const theme = useContext(ThemeContext)
  const tileColor = theme.productTileBackgroundColor.hex
  const tileTextColor = theme.productTileTextColor.hex
  const bgComplement = theme.bgComplement.hex

  const link = referringPath + coffee?.slug?.current + previewQuery
  return (
    <Link to={link}>
      <div
        className='p-4 border-4 rounded shadow text-green-50 w-[300px] h-[300px] mb-1 flex flex-col justify-between'
        style={{
          background: `${bgComplement}`,
          borderColor: `${tileTextColor}`,
          color: `${tileTextColor}`,
        }}
      >
        <div className='h-1/6 grid place-items-center'>
          <h2 className='text-xl sm:text-2xl font-normal'>{coffee.name}</h2>
        </div>
        <div className='flex flex-col flex-grow justify-center items-center space-y-4'>
          {coffee.roastLevel && <p>{coffee.roastLevel} roast</p>}
          {coffee.description && (
            <p className='text-center w-11/12'>{coffee.description}</p>
          )}
          {coffee.roastDate && (
            <p>roasted {dayjs(coffee.roastDate).format('MMMM DD')}</p>
          )}
        </div>
        <div className='h-1/6 grid place-items-center'>
          <p>{coffee.stock} in stock</p>
        </div>
      </div>
    </Link>
  )
}

export default CoffeeCard
