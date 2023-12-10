import Catalog from '@/entities/catalog/Catalog.jsx';
import Search from '@/features/Search.jsx';

export default function Home() {
  return (
    <div className="mx-auto px-5 py-7 max-w-7xl flex flex-col gap-10">
      <div className="w-full h-10 md:hidden">
        <Search />
      </div>
      <Catalog />
    </div>
  );
}
