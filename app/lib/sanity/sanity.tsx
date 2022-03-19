import sanityClient from '@sanity/client';

export default sanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-06',
  token: process.env.SANITY_API_TOKEN ?? ``,

  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
});
// will need auth client to fetch draft docs and mutations
