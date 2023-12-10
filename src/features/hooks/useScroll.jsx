'use client';

import { useEffect, useState } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isScrolled;
};

export default useScroll;
