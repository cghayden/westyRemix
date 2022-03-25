import { useState } from 'react';
import { Link } from 'remix';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MenuSvg from '~/icons/MenuSvg';
// import CartButton from './CartButton';
import Cart from './Cart';
import CoffeeCupIcon from '~/icons/CoffeeCupIcon';

function Header() {
  const [showMobileNav, toggleShowMobileNav] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className='flex text-slate-900 bg-slate-50 items-center p-4'>
      <p className='text-2xl'>
        <Link to='/'>westy coffee</Link>
      </p>
      <MobileNav
        showMobileNav={showMobileNav}
        toggleShowMobileNav={toggleShowMobileNav}
      />
      <div className='ml-auto flex'>
        <button
          className='grid place-items-center'
          type='button'
          aria-label='show navigation menu'
          onClick={() => {
            toggleShowMobileNav(true);
          }}
        >
          <MenuSvg />
        </button>
        <button
          type='button'
          title='Your Cart'
          aria-label='open your shopping cart'
          onClick={() => setIsCartOpen(true)}
          className='ml-4 mr-2'
        >
          <CoffeeCupIcon w={'26'} h={'26'} />
        </button>{' '}
      </div>
      <DesktopNav />

      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </header>
  );
}

export default Header;
