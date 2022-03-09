import { PortableText } from '@portabletext/react';
import type { LandingPage } from '../../sanityTypes';

export default function HomeHero({
  heroContent,
}: {
  heroContent: LandingPage;
}) {
  console.log('hero component prop', heroContent);
  return (
    <div className='grid'>
      hero
      {/* hero {data.sample} */}
      {/* <img className='row-span-full col-span-full' src={data.imageUrl} />
      <div className='grid row-span-full col-span-full relative place-items-center  '>
        <div className='bg-slate-900/50 text-slate-50 p-6'>
          <PortableText value={data.overlayText1} />
        </div>
      </div> */}
    </div>
  );
}
