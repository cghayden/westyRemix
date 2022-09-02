import { Link } from "@remix-run/react";

const NavStyles = `
  padding: 1rem 0;
  margin-left: auto;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  a {
    &:hover {
      color: dark green;
    }
  }
`;

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
  );
}
