import dayjs from 'dayjs'
import { Link } from '@remix-run/react'
import type { Coffee } from '../../sanityTypes'
import { useContext } from 'react'
import { ThemeContext } from '~/context/ThemeContext'
import { useLocation } from 'react-router-dom'

// this card is a link that routes to the specific page for that coffee.  The link is used on the home page ('/') AND on the all coffees page ('/coffee), each of which have a different base url, so the correct url href passed to Link is constructed at the same component as the loader, where the requesting url is obtained, and in the case of the home page, a relative '/coffee' is prepended to the slug, whereas at the /coffee index, just a '/' is prepended

function CoffeeCard({
  coffee,
  previewQuery,
}: {
  coffee: Coffee
  previewQuery: string
}) {
  const location = useLocation()

  const theme = useContext(ThemeContext)
  const tileColor = theme?.productTileBackgroundColor?.hex
  const tileTextColor = theme?.productTileTextColor?.hex

  //these product tiles are used at the index of the site ('/') and on the coffee page '/coffee', so we need to create a proper link for the Link component
  const link =
    location.pathname === '/coffee'
      ? `${location.pathname}/${coffee?.slug?.current}/${previewQuery}`
      : `coffee/${coffee?.slug?.current}/${previewQuery}`
  return (
    <Link to={link}>
      <div
        className='p-4 border-4 rounded shadow w-[300px] h-[300px] mb-1 flex flex-col justify-between'
        style={{
          background: `${tileColor}`,
          borderColor: `${tileTextColor}`,
          color: `${tileTextColor}`,
        }}
      >
        <div className='h-1/6 grid place-items-center'>
          <h2 className='text-xl sm:text-2xl font-normal text-center'>
            {coffee.name}
          </h2>
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
        {/* <div className='flex flex-col flex-grow justify-center items-center space-y-4'>
          <p className='text-center w-11/12'>{`$ ${formatMoney(
            coffee.price
          )}`}</p>
        </div> */}
        <div className='h-1/6 grid place-items-center'>
          <p>{coffee.stock} in stock</p>
        </div>
      </div>
    </Link>
  )
}

export default CoffeeCard
