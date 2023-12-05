import dataCatalog from '@/testData/testDataCatalog.js';
import CatalogItem from './CatalogItem.jsx';

function Catalog() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
      {dataCatalog.map((item) => (
        <CatalogItem
          key={item.id}
          name={item.name}
          description={item.description}
          icon={item.image}
        />
      ))}
    </div>
  );
}

export default Catalog;
