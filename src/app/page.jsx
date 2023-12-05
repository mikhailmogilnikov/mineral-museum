import Catalog from '@/components/ui/catalog/Catalog.jsx';
import Search from '@/components/ui/catalog/Search.jsx';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full h-10 md:hidden">
        <Search />
      </div>
      <Catalog />
    </div>
  );
}
