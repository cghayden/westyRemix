import { useEffect } from 'react';

import { usePreviewSubscription } from '~/lib/sanity/usePreviewSubscription';

export default function Preview({
  data,
  setData,
  query,
  queryParams,
}: {
  data: any;
  setData: any;
  query: any;
  queryParams: any;
}) {
  const { data: previewData } = usePreviewSubscription(query, {
    params: queryParams,
    initialData: data,
    enabled: true,
  });

  useEffect(() => setData(previewData), [previewData]);

  return (
    <div className='pointer-events-none fixed inset-0 z-50 flex items-start justify-center p-2'>
      <div className='flex items-center gap-x-2 rounded bg-pink-500 p-1 font-bold text-white shadow-lg'>
        <span className='inline-block p-2'>Preview Mode</span>
      </div>
    </div>
  );
}
