import type { LandingPage } from '../../sanityTypes';
// import PortableText from 'react-portable-text';
import { PortableText } from '@portabletext/react';

export default function HomeHero({
  heroContent,
}: {
  heroContent: LandingPage;
}) {
  const blockContent = heroContent.overlayText1;
  if (!heroContent.imageUrl && !heroContent.overlayText1) return null;
  return (
    <div className='grid place-content-center bg-slate-50'>
      <img
        className='row-span-full col-span-full w-screen'
        src={heroContent.imageUrl}
      />
      {heroContent.overlayText1 && (
        <div className='grid row-span-full col-span-full relative place-items-center  '>
          <div className='bg-slate-900/50 text-slate-50 w-2/3 p-[5%] text-center'>
            {heroContent.overlayText1 && (
              <PortableText value={heroContent.overlayText1} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
