'use client';

import clsx from 'clsx';
import Link from 'next/link.js';
import { useState } from 'react';
import useScroll from '@/features/hooks/useScroll.jsx';
import MgriLogo from '@/shared/icons/MgriLogo.jsx';
import Search from '../features/Search.jsx';
import ThemeSwitcher from '../shared/ThemeSwitcher.jsx';
import MenuButton from './menu/MenuButton.jsx';
import Menu from './menu/Menu.jsx';

function Header() {
  const isScrolled = useScroll();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header
      className={clsx(
        'flex flex-row justify-between bg-transparent backdrop-blur-xl z-50 sticky top-0 h-16 border-b-1 px-5 transition-colors',
        {
          'border-transparent': !isScrolled && !openMenu,
          'border-black/[0.15] dark:border-white/[0.15]': isScrolled && !openMenu,
          'bg-white dark:bg-black border-black/[0.15] dark:border-white/[0.15]': openMenu,
        },
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-black to-white/50 dark:to-black/50 z-10" />
      <Link
        href="/"
        className="h-full flex items-center gap-[10px] md:gap-5 z-20"
      >
        <MgriLogo size={38} />
        <h1 className="text-sm max-w-[10rem] font-bold md:text-xl md:max-w-fit">
          Минералогический музей
        </h1>
      </Link>
      <div className="h-full flex flex-row gap-16 items-center z-20">
        <div className="w-56 h-10 hidden md:flex">
          <Search />
        </div>
        <div className="h-full flex flex-row gap-4 items-center">
          <ThemeSwitcher />
          <MenuButton isMenuOpen={openMenu} press={handleOpenMenu} />
        </div>
      </div>

      <Menu isMenuOpen={openMenu} />
    </header>
  );
}

export default Header;
