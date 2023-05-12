import sanityClient from '@sanity/client'

let client
try {
  client = sanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-03-06',
    token: process.env.SANITY_API_TOKEN ?? ``,

    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
  })
} catch (error) {
  client = error
}

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-03-06',
  token: process.env.SANITY_API_TOKEN ?? ``,
})
