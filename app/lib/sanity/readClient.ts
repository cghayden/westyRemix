import { createClient } from '@sanity/client'

export const readClient = createClient({
  projectId: 't9guxb1x',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-11-03',
})
