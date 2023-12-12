import Link from 'next/link.js';
import dataCatalog from '@/entities/testDataCatalog.js';
import CatalogItem from './CatalogItem.jsx';

function Catalog() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
      {dataCatalog.map((item) => (
        <Link key={item.id} href={`/${item.id}`} className='w-full h-min'>
          <CatalogItem
            name={item.name}
            description={item.description}
            image={item.image}
          />
        </Link>
      ))}
    </div>
  );
}

export default Catalog;
