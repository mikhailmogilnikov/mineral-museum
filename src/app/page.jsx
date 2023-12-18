import dynamic from 'next/dynamic.js';

export default function Home() {
  const DynamicCatalog = dynamic(
    () => import('@/entities/catalog/Catalog.jsx'),
    {
      // loading: () => <HeaderPreloader />,
    },
  );
  return (
    <div className="mx-auto px-5 py-7 max-w-7xl flex flex-col gap-10">
      <DynamicCatalog />
    </div>
  );
}
