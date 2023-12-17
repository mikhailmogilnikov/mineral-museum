'use client';

import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scrollDirection, setScrollDirection] = useState("none");
  const [prevScrollY, setPrevScrollY] = useState(0);

  const onScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY - prevScrollY > 15) {
      setScrollDirection("down");
    } else if (currentScrollY - prevScrollY < -1) {
      setScrollDirection("up");
    }

    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};

export default useScroll;
