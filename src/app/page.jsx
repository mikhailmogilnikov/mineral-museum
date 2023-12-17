import { Suspense } from 'react';
import Catalog from '@/entities/catalog/Catalog.jsx';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <div className="mx-auto px-5 py-7 max-w-7xl flex flex-col gap-10">
        <Catalog />
      </div>
    </Suspense>
  );
}
