import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  projectId: 't9guxb1x',
  // dataset: process.env.production ? 'production' : 'dev',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-11-01',
  token: process.env.SANITY_API_TOKEN,
}

const client = createClient(config)

export default client
