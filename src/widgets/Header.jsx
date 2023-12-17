'use client';

import clsx from 'clsx';
import Link from 'next/link.js';
import { Suspense, useState } from 'react';
import { GlobalHotKeys } from 'react-hotkeys';
import { motion, AnimatePresence } from 'framer-motion';
import useScroll from '@/features/hooks/useScroll.jsx';
import MgriLogo from '@/shared/icons/MgriLogo.jsx';
import Search from '../features/Search.jsx';
import MenuButton from './menu/MenuButton.jsx';
import Menu from './menu/Menu.jsx';
import useThemeSwitch from '@/features/hooks/useThemeSwitch.jsx';

function Header() {
  const scrollDirection = useScroll();
  const [openMenu, setOpenMenu] = useState(false);

  useThemeSwitch();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const keyMap = {
    SEARCH_SHORTCUT: 'shift+s',
  };

  return (
    <AnimatePresence>
      <GlobalHotKeys
        keyMap={keyMap}
        handlers={{ SEARCH_SHORTCUT: handleOpenMenu }}
      >
        <Suspense fallback={null}>
          <motion.header
            initial={{ y: 0 }}
            animate={{
              y:
                scrollDirection === 'up' || openMenu || window.scrollY < 64
                  ? 0
                  : -100,
            }}
            exit={{ y: -100 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 30,
            }}
            className={clsx(
              'flex flex-row justify-between backdrop-blur-xl z-50 sticky top-0 h-16 px-5 transition-colors border-b-1 bg-transparent',
              {
                'border-transparent': window.scrollY <= 0 && !openMenu,
                'border-black/[0.15] dark:border-white/[0.15]':
                  window.scrollY > 0 && !openMenu,
                'border-[#dcdcdc] dark:border-[#282828]': openMenu,
              },
            )}
          >
            <div
              className={clsx(
                'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white dark:from-black to-transparent z-20',
                {
                  'bg-white/40 dark:bg-black/40': !openMenu,
                  'bg-white dark:bg-black': openMenu,
                },
              )}
            />
            <Link
              href="/"
              className="h-full flex items-center gap-[10px] md:gap-5 z-20"
              onClick={handleCloseMenu}
            >
              <MgriLogo size={38} />
              <h1 className="text-sm max-w-[10rem] font-bold md:text-xl md:max-w-fit">
                Минералогический музей
              </h1>
            </Link>
            <div className="h-full flex flex-row gap-16 items-center z-20">
              <div className="h-full flex flex-row gap-4 items-center">
                <Search closeMenu={handleCloseMenu} />
                <MenuButton isMenuOpen={openMenu} press={handleOpenMenu} />
              </div>
            </div>

            <Menu closeMenu={handleCloseMenu} isMenuOpen={openMenu} />
          </motion.header>
        </Suspense>
      </GlobalHotKeys>
    </AnimatePresence>
  );
}

export default Header;
