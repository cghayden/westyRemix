import FacebookSvg from '~/icons/FacebookSvg'
import InstagramSvg from '~/icons/InstagramSvg'
import TwitterSvg from '~/icons/TwitterSvg'

export default function SocialLinks({
  instagramHandle,
  twitterHandle,
  facebookId,
}: {
  instagramHandle?: string
  twitterHandle?: string
  facebookId?: string
}) {
  return (
    <div className='flex justify-center items-center my-1'>
      {instagramHandle && (
        <a
          className='mx-2'
          href={`https://www.instagram.com/${instagramHandle}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to instagram'
        >
          <span>
            <InstagramSvg w={'24'} h={'24'} />
          </span>
        </a>
      )}
      {twitterHandle && (
        <a
          className='mx-2'
          href={`https://twitter.com/${twitterHandle}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to twitter'
        >
          <span>
            <TwitterSvg w={'30'} h={'30'} />
          </span>
        </a>
      )}
      {facebookId && (
        <a
          className='mx-2'
          href={`https://facebook.com/${facebookId}`}
          rel='noopener noreferrer'
          target='_blank'
          aria-label='Link to facebook'
        >
          <span>
            <FacebookSvg w={'30'} h={'30'} />
          </span>
        </a>
      )}
    </div>
  )
}
