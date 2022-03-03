import { Link } from 'remix';
import styled from 'styled-components';
import InstagramSvg from '~/icons/InstagramSvg';
import XSvg from '~/icons/XSvg';

interface MobileNavContainerProps {
  readonly showMobileNav: boolean;
}
type ComponentProps = {
  showMobileNav: boolean;
  toggleShowMobileNav: (bool: boolean) => void;
};
const MobileNavContainer = styled.div<MobileNavContainerProps>`
  background: whitesmoke;
  color: var(--raisinBlack);
  box-shadow: var(--dropShadow3);
  padding: 1rem;
  width: 75vw;
  max-width: 400px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  z-index: 101;

  transition: all 0.3s;
  transform: translate3d(
    ${(props) => (props.showMobileNav ? 0 : '110%')},
    0,
    0
  );
`;
const MobileNavStyles = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    font-size: 1.3rem;
    margin-left: 1rem;
    margin-top: 0;
  }
`;
const MobileNavHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default function MobileNav({
  showMobileNav,
  toggleShowMobileNav,
}: ComponentProps) {
  return (
    <MobileNavContainer className='hideOnDesktop' showMobileNav={showMobileNav}>
      <MobileNavHeader>
        <button
          type='button'
          className='btn-icon'
          aria-label='close navigation'
          onClick={() => toggleShowMobileNav(false)}
        >
          <XSvg w={'24'} h={'24'} />
        </button>
      </MobileNavHeader>
      <MobileNavStyles>
        <ul>
          <li>
            <Link onClick={() => toggleShowMobileNav(false)} to='/coffee'>
              coffee
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleShowMobileNav(false)} to='/events'>
              events
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleShowMobileNav(false)} to='/blog'>
              blog
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleShowMobileNav(false)} to='/about'>
              about
            </Link>
          </li>
          <li>
            <Link onClick={() => toggleShowMobileNav(false)} to='/contact'>
              contact
            </Link>
          </li>
          <li>
            <a
              href='https://www.instagram.com/neighborlycoffee'
              rel='noopener noreferrer'
              target='_blank'
            >
              <InstagramSvg w={'24'} h={'24'} />
            </a>
          </li>
        </ul>
      </MobileNavStyles>
    </MobileNavContainer>
  );
}
