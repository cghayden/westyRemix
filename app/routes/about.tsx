import { LoaderArgs, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ContentContainer from '~/components/styledContainers/ContentContainer';
import { PortableText } from '~/lib/sanity/helpers';
import sanity from '~/lib/sanity/sanity';

const aboutPageQuery = `*[_type == 'aboutPage']`;
export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const data = await sanity.fetch(aboutPageQuery);
  return data;
};

export default function aboutPage() {
  const data = useLoaderData<typeof loader>()[0];
  console.log('data', data);
  return (
    <main>
      <h1>{data.heading}</h1>
      <ContentContainer>
        <PortableText value={data.content} />
      </ContentContainer>
    </main>
  );
}
