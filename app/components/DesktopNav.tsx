import { Link } from '@remix-run/react'

const links = ['coffee', 'events', 'blog', 'about', 'contact']

export default function DesktopNav() {
  return (
    <nav className='hidden md:block self-center'>
      <ul className='flex text-xl'>
        {links.map((link) => (
          <li key={link} className='px-3'>
            <Link to={`./${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
