import { useState } from 'react';
import { Link } from 'remix';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import MenuSvg from '~/icons/MenuSvg';
import Cart from './Cart';
import CoffeeCupIcon from '~/icons/CoffeeCupIcon';
import { useCartItems, useCartUtils } from '~/context/useCart';

function Header() {
  const [showMobileNav, toggleShowMobileNav] = useState(false);
  const { toggleIsCartOpen } = useCartUtils();
  const cartItems = useCartItems();

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
          onClick={() => toggleIsCartOpen(true)}
          className='ml-4 mr-2 grid grid-cols-1 grid-rows-1 place-items-center text-center'
        >
          <div className='row-span-full col-span-full'>
            <CoffeeCupIcon w={'32'} h={'32'} />
          </div>
          <div className='bg-red-500 text-red-50 p-[1px] leading-5 min-w-[18px] h-[18px] mr-[5px] mt-2 text-sm row-span-full col-span-full rounded-full'>
            <p className='-mt-[2px]'>3</p>
          </div>
        </button>{' '}
      </div>
      <DesktopNav />

      <Cart />
    </header>
  );
}

export default Header;
