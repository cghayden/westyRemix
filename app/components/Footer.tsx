import { useLoaderData } from '@remix-run/react'
import { PortableText } from '@portabletext/react'
import SocialLinks from './SocialLinks'
import GithubMark from '~/icons/GithubMark'

// useLoaderDate -- You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context. (contact query is run in root loader)
// To get data from any active route on the page, see useRouteLoaderData.

export default function Footer() {
  const { contactContent } = useLoaderData()
  console.log('contactContent', contactContent)

  return (
    <>
      <div className='bg-slate-50 text-slate-800 mt-auto w-full flex flex-col py-4 px-4'>
        <div className='flex justify-between w-full max-w-2xl mx-auto'>
          <div>
            <PortableText value={contactContent?.content} />
          </div>
          <SocialLinks
            instagramHandle={contactContent?.instagramLink}
            twitterHandle={contactContent?.twitterLink}
            facebookId={contactContent?.facebookLink}
          />
        </div>
      </div>
      <div className='text-sm py-3 flex items-center justify-center gap-10 bg-gray-900 text-gray-100'>
        <p>website by Corey Hayden</p>
        <div className='flex items-center gap-5'>
          <a href='mailto:cghayden@gmail.com'>cghayden@gmail.com</a>
          <GithubMark />
        </div>
      </div>
    </>
  )
}
