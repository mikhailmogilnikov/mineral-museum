import dynamic from 'next/dynamic';
import dataCatalog from '@/entities/testDataCatalog.js';
import Text from '@/shared/primitives/Text.jsx';

export default function CatalogItemPage({ params }) {
  const item = dataCatalog.find((dataItem) => dataItem.id === params.stoneId);

  const DynamicThreeViewer = dynamic(
    () => import('@/entities/threeViewers/threeModelViewer.jsx'),
    {
      ssr: false,
      loading: () => (
        <div className="relative w-full h-[65vh] border-b-1 border-black/[0.15] dark:border-y-white/[0.15]">
          <div className="absolute right-3 bottom-3 flex flex-row gap-3">
            <div className="w-8 h-8 bg-black/5 dark:bg-white/5 rounded-xl" />
            <div className="w-8 h-8 bg-black/5 dark:bg-white/5 rounded-xl" />
          </div>
        </div>
      ),
    },
  );

  return (
    <>
      <DynamicThreeViewer modelPath={item.modelPath} />

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
