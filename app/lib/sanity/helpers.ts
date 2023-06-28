import imageUrlBuilder from '@sanity/image-url'
import type { BackgroundImage, MainImage, SanityImage } from 'sanityTypes'
import sanityClient from '~/lib/sanity/sanity'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source: SanityImage | MainImage | BackgroundImage) {
  return builder.image(source)
}

export { urlFor }
