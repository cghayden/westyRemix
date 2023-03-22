import dayjs from 'dayjs'
import { BodyPortableText, MainImage } from 'sanityTypes'
import { PortableText, urlFor } from '~/lib/sanity/helpers'
import ContentContainer from './ContentContainer'

function TwoColContainer({
  heading,
  image,
  date,
  content,
}: {
  heading: string
  image: MainImage
  date: string
  content: BodyPortableText
}) {
  return (
    <div className='h-full grid sm:grid-cols-autoFit2 place-items-center gap-3 bg-slate-50 text-slate-800 p-4 rounded max-w-[900px] sm:min-w-[316px] w-11/12 my-6 mx-auto shadow-lg'>
      {image && (
        <div className='w-max-[300px]'>
          <img
            className='max-w-[300]'
            loading='lazy'
            src={urlFor(image).width(300).fit('max').url()}
            // width='400'
            // height='200'
            alt={image.alt ?? ``}
          />
        </div>
      )}
      <div>
        <div className='text-center pb-2'>
          <h2 className='text-xl font-bold'>{heading}</h2>
          <p className='text-s pb-2'>{dayjs(date).format('MMMM DD, YYYY')}</p>
        </div>
        <div className='text-sm'>
          <PortableText value={content} />
        </div>
      </div>
    </div>
  )
}

export { TwoColContainer }
