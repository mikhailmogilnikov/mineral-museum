'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const useThemeSwitch = () => {
  const { resolvedTheme } = useTheme();
	console.log('test', resolvedTheme)

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#000000');
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ffffff');
    }
  }, [resolvedTheme]);
};

export default useThemeSwitch;
