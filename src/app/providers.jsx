'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';

function Providers({ children }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default Providers;
