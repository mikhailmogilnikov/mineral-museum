'use client';

import { motion } from 'framer-motion';
import Text from '@/components/primitives/Text.jsx';

function CatalogItem({ name, description }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="w-full flex flex-col justify-between aspect-[3/4] rounded-3xl border-1 border-black/[0.15] dark:border-white/[0.15]"
    >
      <div />
      <div className="w-full flex flex-col gap-1 md:gap-2 flex-shrink-0 p-3 sm:p-5">
        <Text tag="h4" content={name} />
        <Text
          className="opacity-70 text-xs md:text-sm overflow-hidden text-ellipsis line-clamp-2"
          content={description}
        />
      </div>
    </motion.button>
  );
}

export default CatalogItem;
