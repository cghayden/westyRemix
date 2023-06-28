import { useLoaderData } from '@remix-run/react'
import { PortableText } from '@portabletext/react'
import SocialLinks from './SocialLinks'

// useLoaderDate -- You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context. (contact query is run in root loader)
// To get data from any active route on the page, see useRouteLoaderData.

export default function Footer() {
  const { contactContent } = useLoaderData()

  return (
    <div className='bg-slate-50 text-slate-800 mt-auto w-full flex flex-col pt-4 pb-2 px-4'>
      <div className='flex justify-between w-full max-w-2xl mx-auto'>
        <div>
          <PortableText value={contactContent?.content} />
        </div>
        <SocialLinks
          instagramHandle={contactContent?.instagramHandle}
          twitterHandle={contactContent?.twitterHandle}
          facebookId={contactContent?.facebookId}
        />
      </div>
      <div className='text-sm text-center '>
        <p>website by Corey Hayden</p>
        <a href='mailto:cghayden@gmail.com'>cghayden@gmail.com</a>
      </div>
    </div>
  )
}
