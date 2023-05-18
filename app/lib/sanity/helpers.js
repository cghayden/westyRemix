import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/lib/sanity/sanity'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

export { urlFor }
