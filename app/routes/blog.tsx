import { json, LoaderArgs, LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import { urlFor } from '~/lib/sanity/helpers';
import sanity from '~/lib/sanity/sanity';
import { PortableText } from '@portabletext/react';

const query = `*[_type == "post" && !(_id in path('drafts.**'))] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  excerpt, 
  mainImage,
  slug
}`;

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  // Put site in preview mode if the right query param is used
  // const preview = requestUrl.searchParams.get(`preview`) === process.env.SANITY_PREVIEW_SECRET

  // const allArticles = await Promise.all([
  //   await client.fetch(homeQuery).then((result) => articleStubsZ.parse(result)),
  //   await exchangeClient
  //     .fetch(exchangeQuery, exchangeParams)
  //     .then((result) => exchangeStubsZ.parse(result)),
  // ]);
  const requestUrl = new URL(request?.url);

  const referringPath = requestUrl.pathname;
  const allPosts = await sanity.fetch(query);
  return { allPosts, referringPath };
  // Sort combined articles by date
  // const sortedArticles = allArticles
  //   .flat()
  //   .sort((a, b) =>
  //     a.published && b.published
  //       ? new Date(b.published).getTime() - new Date(a.published).getTime()
  //       : 0
  //   );
};

export default function Index() {
  const { allPosts, referringPath } = useLoaderData<typeof loader>();
  console.log('allPosts', allPosts);
  // const matches = useMatches()
  // const siteMeta: SiteMeta = matches?.find((match) => match?.handle?.id === 'root')?.data?.siteMeta
  return (
    <main>
      {/* {siteMeta?.bio && siteMeta?.bio?.length > 1 ? <Intro value={siteMeta.bio} /> : null} */}
      <ul className='grid gap-5 mx-auto my-8 w-[95%] max-w-[800px]'>
        {allPosts.length > 0 &&
          allPosts.map((post) => (
            <li key={post.title}>
              {/* Link has all ClassNames of ContentContainer except my-6 */}
              <Link
                to={`${referringPath}/${post.slug.current}`}
                className='bg-slate-50 p-4 rounded max-w-[800px] min-w-[316px] w-11/12 mx-auto grid md:grid-cols-autoFit2 h-full place-items-center gap-3 drop-shadow-md'
              >
                {post.mainImage && (
                  <div>
                    <img
                      loading='lazy'
                      src={urlFor(post.mainImage)}
                      // width='400'
                      // height='200'
                      alt={post.title ?? ``}
                    />
                  </div>
                )}
                <div>
                  <h2 className='font-bold text-center pb-4'>{post.title}</h2>
                  <PortableText value={post.excerpt} />
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
