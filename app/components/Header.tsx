import { useState } from 'react';
import { Link } from 'remix';
import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MenuSvg from '~/icons/MenuSvg';

// import CartButton from './CartButton';
// import Cart from './Cart';

const HeaderStyles = styled.header`
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
const LogoStyle = styled.p`
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
const ButtonsDiv = styled.div`
  margin-left: auto;
`;
function Header() {
  const [showMobileNav, toggleShowMobileNav] = useState(false);

  return (
    <HeaderStyles>
      <LogoStyle>
        <Link to='/'>neighborly coffee</Link>
      </LogoStyle>
      <ButtonsDiv className='hideOnDesktop'>
        <button
          type='button'
          className='hide-gtLarge btn-icon'
          aria-label='show navigation menu'
          onClick={() => {
            toggleShowMobileNav((showMobileNav) => !showMobileNav);
          }}
        >
          <MenuSvg />
        </button>
      </ButtonsDiv>
      <DesktopNav />
      <MobileNav
        showMobileNav={showMobileNav}
        toggleShowMobileNav={toggleShowMobileNav}
      />
      {/* <CartButton /> */}
      {/* <Cart /> */}
    </HeaderStyles>
  );
}

export default Header;
