import { Suspense } from 'react';

function Footer() {
  return (
    <Suspense
      fallback={
        <footer className="mt-10 h-96 border-t-1 border-black/[0.15] dark:border-white/[0.15]" />
      }
    >
      <footer className="mt-10 h-96 border-t-1 border-black/[0.15] dark:border-white/[0.15]" />
    </Suspense>
  );
}

export default Footer;
