import dataCatalog from '@/entities/testDataCatalog.js';
import ThreeModelViewer from '@/entities/threeViewers/ThreeModelViewer.jsx';
import Text from '@/shared/primitives/Text.jsx';

export default function CatalogItemPage({ params }) {
  const item = dataCatalog.find((dataItem) => dataItem.id === params.stoneId);

  return (
    <>
      {/* <ThreeViewer modelPath={item.modelPath} /> */}
      <ThreeModelViewer modelPath={item.modelPath} />
      <div className="mx-auto px-5 py-8 max-w-7xl flex flex-col md:flex-row gap-10">
        <div className="flex flex-col gap-8 flex-shrink-1">
          <Text tag="h1" className="!text-3xl" content={item.name} />
          <Text
            tag="h5"
            className="font-normal opacity-70"
            content={item.description}
          />
        </div>
        <div className="w-full md:w-96 h-72 rounded-3xl flex-shrink-0 bg-black/10 dark:bg-white/10" />
      </div>
    </>
  );
}
