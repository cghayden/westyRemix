import { Link } from '@remix-run/react'

export default function Nav() {
  return (
    <nav className='hidden'>
      <ul>
        <li>
          <Link to='/coffee'>coffee</Link>
        </li>
        <li>
          <Link to='/events'>events</Link>
        </li>
        <li>
          <Link to='/blog'>blog</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/contact'>contact</Link>
        </li>
      </ul>
    </nav>
  )
}
