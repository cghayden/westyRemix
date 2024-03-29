import { type ClientConfig } from '@sanity/client'

export const config: ClientConfig = {
  projectId: 't9guxb1x',
  // dataset: process.env.production ? 'production' : 'dev',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-11-01',
  token: process.env.SANITY_API_TOKEN,
}
