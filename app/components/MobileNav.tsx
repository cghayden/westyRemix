import { Link } from 'remix';
import InstagramSvg from '~/icons/InstagramSvg';
import XSvg from '~/icons/XSvg';

type ComponentProps = {
  showMobileNav: boolean;
  toggleShowMobileNav: (bool: boolean) => void;
};

const links = ['coffee', 'events', 'blog', 'about', 'contact'];

export default function MobileNav({
  showMobileNav,
  toggleShowMobileNav,
}: ComponentProps) {
  return (
    <div
      className={`bg-slate-50 text-slate-900 p-4 w-3/4 max-w-md fixed top-0 right-0 h-screen z-20 transition-all hideOnDesktop
        ${showMobileNav ? 'translate-x-0 ' : 'translate-x-full'}`}
    >
      <header className='flex items-center justify-end'>
        <button
          type='button'
          className='btn-icon'
          aria-label='close navigation'
          onClick={() => toggleShowMobileNav(false)}
        >
          <XSvg w={'24'} h={'24'} />
        </button>
      </header>
      <nav>
        <ul className='flex flex-col text-xl ml-4'>
          {links.map((link) => (
            <li key={link} className='p-3'>
              <Link onClick={() => toggleShowMobileNav(false)} to={`./${link}`}>
                {link}
              </Link>
            </li>
          ))}
          <li className='p-3'>
            <a
              href='https://www.instagram.com/neighborlycoffee'
              rel='noopener noreferrer'
              target='_blank'
            >
              <InstagramSvg w={'24'} h={'24'} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
