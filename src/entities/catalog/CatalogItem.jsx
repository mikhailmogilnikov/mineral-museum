'use client';

import { motion } from 'framer-motion';
import Image from 'next/image.js';
import Text from '@/shared/primitives/Text.jsx';

function CatalogItem({ name, description, image }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="w-full h-full flex flex-col gap-1 overflow-hidden justify-between shadow-medium rounded-3xl border-1 border-black/5 dark:border-white/[0.15]"
    >
      <div className="w-full aspect-square self-center flex-shrink-1">
        <Image
          width={200}
          height={200}
          src={image}
          alt={name}
          className="w-full h-full flex-shrink-1"
        />
      </div>
      <div className="w-full flex flex-col gap-1 md:gap-1 flex-shrink-0 p-3 pt-0 sm:p-5">
        <Text tag="h4" content={name} />
        <Text
          className="opacity-70 text-xs md:text-sm overflow-hidden line-clamp-2 text-clip"
          content={description}
        />
      </div>
    </motion.button>
  );
}

export default CatalogItem;
