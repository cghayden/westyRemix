import FacebookSvg from '~/icons/FacebookSvg'
import InstagramSvg from '~/icons/InstagramSvg'
import TwitterSvg from '~/icons/TwitterSvg'
import { ContactPage } from 'sanityTypes'

export default function SocialLinks({
  contactData,
}: {
  contactData: ContactPage
}) {
  const instagram = contactData.instagramLink
  const twitter = contactData.twitterLink
  const fb = contactData.facebookLink

  return (
    <div className='flex justify-center items-center my-1'>
      <a
        className='mx-2'
        href={`https://${instagram}`}
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Link to instagram'
      >
        <span>
          <InstagramSvg w={'24'} h={'24'} />
        </span>
      </a>
      <a
        className='mx-2'
        href={`https://${twitter}`}
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Link to twitter'
      >
        <span>
          <TwitterSvg w={'30'} h={'30'} />
        </span>
      </a>
      <a
        className='mx-2'
        href={`https://${fb}`}
        rel='noopener noreferrer'
        target='_blank'
        aria-label='Link to facebook'
      >
        <span>
          <FacebookSvg w={'30'} h={'30'} />
        </span>
      </a>
    </div>
  )
}
