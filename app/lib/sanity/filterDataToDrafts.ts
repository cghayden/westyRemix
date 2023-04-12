import { SanityDocument } from '@sanity/client';

export function filterDataToDrafts(
  incomingData: SanityDocument[],
  preview = false
) {
  if (!Array.isArray(incomingData)) {
    return incomingData;
  }

  if (incomingData.length === 1) {
    return incomingData;
  }

  if (preview) {
    //if there are 2, show the draft version

    const finalData: SanityDocument[] = [];

    for (const incomingItem of incomingData) {
      //if it's not a draft, put it in final array
      if (!incomingItem._id.startsWith('drafts')) {
        finalData.push(incomingItem);
      }
      // if it starts with drafts, look in the finalData array for a matching id stripped of drafts prefix, and replace
      if (incomingItem._id.startsWith('drafts')) {
        // incomingItem._id = incomingItem._id.slice(7);
        const draft_id = incomingItem._id.slice(7);

        const matchIndex = finalData.findIndex(
          (finalDataItem) => finalDataItem._id === draft_id
        );
        if (matchIndex == -1) {
          finalData.push(incomingItem);
          continue;
        }
        finalData.splice(matchIndex, 1, incomingItem);
      }
    }
    return finalData;
  }

  // not in preview mode? remove all draft versions
  return incomingData.filter((item) => !item._id.startsWith(`drafts.`));
}
