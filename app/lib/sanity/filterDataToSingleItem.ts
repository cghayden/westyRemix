import { SanityDocument } from '@sanity/client'

export function filterDataToSingleItem<T extends SanityDocument>(
  data: T[],
  preview = false
): T {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data.find((item) => !item._id.startsWith(`drafts.`)) || data[0]
}
