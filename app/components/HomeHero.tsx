import type { LandingPage } from '../../sanityTypes'
import { PortableText } from '@portabletext/react'

export default function HomeHero({
  pageContent,
}: {
  pageContent: LandingPage
}) {
  if (!pageContent?.imageUrl) return null
  return (
    <div className='grid place-content-center bg-slate-50'>
      <img
        className='row-span-full col-span-full w-screen'
        src={pageContent?.imageUrl}
        alt=''
      />
      {pageContent?.overlayText1 && (
        <div className='grid row-span-full col-span-full relative place-items-center  '>
          <div className='bg-slate-900/50 text-slate-50 w-2/3 p-[5%] text-center'>
            {pageContent?.overlayText1 && (
              <PortableText value={pageContent?.overlayText1} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
