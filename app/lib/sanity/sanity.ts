import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  // Find your project ID and dataset in `sanity.json` in your studio project
  // projectId: process.env.SANITY_PROJECT_ID,
  projectId: 't9guxb1x',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-03-06',
  token: process.env.SANITY_API_TOKEN,
}

const client = createClient(config)

export default client
