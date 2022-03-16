import { useState } from 'react';
import { Link } from 'remix';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MenuSvg from '~/icons/MenuSvg';

const HeaderStyles = `
  display: flex;
  color: var(--black);
  background: var(--white);
  align-items: center;
  padding: 1rem;
  p {
    color: inherit;
    margin: 0;
  }
`;

const LogoStyle = `
  font-size: 1.5rem;
  h1 {
    font-weight: 300;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    color: inherit;
  }
  a {
    font-size: 1.5rem;
    padding: 0;
  }
`;
const ButtonsDiv = `
  margin-left: auto;
`;

function Header() {
  const [showMobileNav, toggleShowMobileNav] = useState(false);

  return (
    <header className='flex text-slate-900 bg-slate-50 items-center p-4'>
      <p className='text-2xl'>
        <Link to='/'>westy coffee</Link>
      </p>
      <MobileNav
        showMobileNav={showMobileNav}
        toggleShowMobileNav={toggleShowMobileNav}
      />
      <div className='ml-auto'>
        <button
          type='button'
          // className='btn-icon'
          aria-label='show navigation menu'
          onClick={() => {
            toggleShowMobileNav(true);
          }}
        >
          <MenuSvg />
        </button>
      </div>
      <DesktopNav />

      {/* <CartButton /> */}
      {/* <Cart /> */}
    </header>
  );
}

export default Header;
