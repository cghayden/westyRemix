import { useEffect, useState } from 'react';
import { groqStore, GroqStore } from '@sanity/groq-store';

import { config } from './config';

interface SubscriptionOptions<R = any> {
  enabled?: boolean;
  params?: Record<string, unknown>;
  initialData?: R;
}

// const config = {
//   apiVersion: '2021-03-25',
//   // Find these in your ./studio/sanity.json file
//   dataset: 'production',
//   projectId: 't9guxb1x',
//   useCdn: false,
// };
export function usePreviewSubscription(
  query: string,
  subscriptionOptions: SubscriptionOptions
) {
  const { enabled, params, initialData } = subscriptionOptions;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let sub: any;
    let store: GroqStore | undefined;

    async function createStore() {
      // For more details about configuring groq-store see:
      // https://www.npmjs.com/package/@sanity/groq-store

      const { projectId, dataset } = config;

      store = groqStore({
        projectId,
        dataset,
        // Keep dataset up to date with remote changes. Default: false
        listen: true,

        // "Replaces" published documents with drafts, if available.
        // Note that document IDs will not reflect draft status, currently
        overlayDrafts: true,

        // Optional token, if you want to receive drafts, or read data from private datasets
        // NOTE: Does _not_ work in browsers (yet)

        documentLimit: 1000,
      });

      store.subscribe(
        query,
        params ?? {}, // Params
        (err: any, result: any) => {
          if (err) {
            console.error('Oh no, an error:', err);
            return;
          }
          setData(result);
        }
      );
    }

    if (enabled) {
      createStore();
    }

    return () => {
      if (sub?.unsubscribe()) sub.unsubscribe();
      if (store) store.close();
    };
  }, []);

  return { data };
}
