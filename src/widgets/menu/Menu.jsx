import { AnimatePresence, motion } from 'framer-motion';
import MenuContent from './MenuContent.jsx';

const initialAnimation =
  window.innerWidth < 640 ? { y: '-100%' } : { x: '100%' };

function Menu({ isMenuOpen, closeMenu }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          <motion.menu
            initial={initialAnimation}
            animate={{ y: 0, x: 0 }}
            exit={initialAnimation}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 26,
            }}
            className="absolute w-[100vw] md:w-[28rem] h-[calc(100dvh-4rem)] top-16 right-0 bg-white dark:bg-black border-l-0 md:border-l-1 border-black/[0.15] dark:border-white/[0.15] z-10"
          >
            <MenuContent />
          </motion.menu>
          <motion.button
            type="button"
            aria-label="Закрыть меню"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hidden md:block absolute w-screen h-screen top-16 left-0 dark:bg-black/40 backdrop-blur-2xl cursor-pointer"
            onClick={closeMenu}
          />
        </>
      )}
    </AnimatePresence>
  );
}

export default Menu;
