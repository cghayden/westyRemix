import { useLoaderData } from '@remix-run/react'
import { PortableText } from '~/lib/sanity/helpers'
import SocialLinks from './SocialLinks'

// useLoaderDate -- You can use this hook in any component or any custom hook, not just the Route element. It will return the data from the nearest route on context. (contact query is run in root loader)
// To get data from any active route on the page, see useRouteLoaderData.

export default function Footer() {
  const { contactData } = useLoaderData()

  return (
    <div className='bg-slate-50 mt-auto w-full flex justify-between px-8 py-4'>
      <div>
        <PortableText value={contactData.content} />
      </div>
      <SocialLinks contactData={contactData} />
    </div>
  )
}
