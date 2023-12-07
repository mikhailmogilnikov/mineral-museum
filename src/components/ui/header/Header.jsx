'use client';

import clsx from 'clsx';
import Link from 'next/link.js';
import MgriLogo from '@/components/primitives/MgriLogo.jsx';
import Text from '@/components/primitives/Text.jsx';
import useScroll from '@/hooks/useScroll.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import MenuButton from './MenuButton.jsx';
import Search from '../catalog/Search.jsx';

function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={clsx(
        'flex flex-row justify-between bg-transparent backdrop-blur-xl z-50 sticky top-0 h-16 border-b-1 px-5 transition-colors',
        {
          'border-transparent': !isScrolled,
          'border-black/[0.15] dark:border-white/[0.15]': isScrolled,
        },
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-black to-transparent z-10" />
      <Link href="/" className="h-full flex items-center gap-5 z-20">
        <MgriLogo size={38} />
        <Text tag="h1" className="hidden sm:block" content="Минералогический музей" />
      </Link>
      <div className="h-full flex flex-row gap-16 items-center z-20">
        <div className="w-56 h-10 hidden md:flex">
          <Search />
        </div>
        <div className="h-full flex flex-row gap-4 items-center">
          <ThemeSwitcher />
          <MenuButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
