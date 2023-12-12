import { AnimatePresence, motion } from 'framer-motion';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

const initialAnimation = window.innerWidth < 640 ? { y: '-100%' } : { x: '100%' };

function Menu({ isMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={initialAnimation}
          animate={{ y: 0, x: 0 }}
          exit={initialAnimation}
          transition={{
            type: 'spring',
            stiffness: 160,
            damping: 26,
          }}
          className="absolute w-[100vw] md:w-[28rem] h-[calc(100dvh-4rem)] top-16 right-0 bg-white dark:bg-black md:border-l-1 md:border-black/[0.15] md:dark:border-white/[0.15]"
        >
          <ScrollShadow className="w-full flex flex-col gap-5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Menu;
