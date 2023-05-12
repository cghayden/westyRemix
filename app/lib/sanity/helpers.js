import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '~/lib/sanity/sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'

import { config } from './config'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
  return builder.image(source)
}

// export const urlFor = (source) => imageUrlBuilder(config).image(source)

export function PortableText(props) {
  return <PortableTextComponent {...props} />
}

export { urlFor }
