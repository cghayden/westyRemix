import imageUrlBuilder from '@sanity/image-url'
import type { BackgroundImage, MainImage, SanityImage } from 'sanityTypes'
import { createClient } from '@sanity/client'
import { readClient } from './readClient'

const builder = imageUrlBuilder(readClient)

function urlFor(source: SanityImage | MainImage | BackgroundImage) {
  return builder.image(source)
}

export { urlFor }
