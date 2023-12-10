/* eslint-disable no-undef */

'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Metrics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    ym(95833812, 'hit', url);
  }, [pathname, searchParams]);

  return null;
}
