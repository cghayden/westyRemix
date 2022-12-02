import type { LoaderFunction } from '@remix-run/node';
import { useCatch, useLoaderData, useParams } from '@remix-run/react';
import { filterDataToSingleItem } from '~/lib/sanity/filterDataToSingleItem';
import type { Post } from '../../../sanityTypes';
import { useState } from 'react';
import Preview from '~/components/Preview';
import { getClient } from '~/lib/sanity/getClient';
import { PortableText, urlFor } from '~/lib/sanity/helpers';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
  src: string | ImageUrlBuilder;
}
type LoaderData = {
  initialData: Post[];
  preview: boolean;
  singlePostQuery?: string | null;
  queryParams?: { slug: string | undefined } | null;
};

//Route params are passed to your loader.
export const loader: LoaderFunction = async ({ request, params }) => {
  const requestUrl = new URL(request?.url);
  const preview: boolean =
    requestUrl?.searchParams?.get('preview') ===
    process.env.SANITY_PREVIEW_SECRET;

  // Query for _all_ documents with this slug
  // There could be two: Draft and Published!

  //in this query, '$' character before 'slug' denotes that slug is a string template, provided in second argument of the fetch function call
  const singlePostQuery = `*[_type == "post" && slug.current == $slug]`;
  const queryParams = { slug: params.slug };
  const initialData = await getClient(preview).fetch(
    singlePostQuery,
    queryParams
  );
  if (!initialData) {
    throw new Response('Oh no - that Post was not found!', {
      status: 404,
      statusText: 'That post was not found',
    });
  }

  const data: LoaderData = {
    initialData,
    preview,
    // If `preview` mode is active, we'll need these for live updates:
    singlePostQuery: preview ? singlePostQuery : null,
    queryParams: preview ? queryParams : null,
  };

  return data;
};

export default function CoffeeRoute() {
  let { initialData, preview, singlePostQuery, queryParams } =
    useLoaderData<LoaderData>();

  // If `preview` mode is active, its component update this state for us
  const [data, setData] = useState(initialData);

  //  A helper function checks the returned documents
  // To show Draft if in preview mode, otherwise Published
  const post: Post = filterDataToSingleItem(data, preview);
  console.log('post', post);
  return (
    <main className='h-screen'>
      {preview && (
        <Preview
          data={data}
          setData={setData}
          query={singlePostQuery}
          queryParams={queryParams}
        />
      )}
      {/* When working with draft content, optional chain _everything_ */}
      <ContentContainer>
        Post Container
        {post?.mainImage && (
          <img
            loading='lazy'
            src={urlFor(post.mainImage)}
            width='400'
            height='200'
            alt={post?.title ?? ``}
            className='m-auto py-7'
          />
        )}
        {post?.title && (
          <h2 className='p-4 text-3xl text-center'>{post.title}</h2>
        )}
        <PortableText value={post.body} />
      </ContentContainer>
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  switch (caught.status) {
    case 404: {
      return (
        <div className='error-container'>
          Huh? What the heck is {params.postSlug}?
        </div>
      );
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const { postSlug } = useParams();
  return (
    <div className='error-container'>{`There was an error loading post ${postSlug}. Sorry.`}</div>
  );
}

// export const meta: MetaFunction = ({
//   data,
// }: {
//   data: LoaderData | undefined;
// }) => {
//   if (!data) {
//     return {
//       title: 'No post',
//       description: 'No post found',
//     };
//   }
//   return {
//     title: `${data.post.name}`,
//     description: `Enjoy a hot cup of  "${data.post.name}" post`,
//   };
// };
