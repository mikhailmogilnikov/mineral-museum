'use client';

import clsx from 'clsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import useScroll from '@/hooks/useScroll.jsx';

function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={clsx(
        'flex flex-row justify-between sticky top-0 h-16 border-b-1 px-5 transition-colors',
        {
          'border-transparent': !isScrolled,
          'border-black/[0.15] dark:border-white/[0.15]': isScrolled,
        },
      )}
    >
      <div className="h-full"></div>
      <div className="h-full flex items-center">
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
