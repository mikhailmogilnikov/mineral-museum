import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import dataCatalog from '@/entities/testDataCatalog.js';
import Text from '@/shared/primitives/Text.jsx';
import ThreeViewerFallback from '@/features/preloaders/ThreeViewerFallback.jsx';
import CategoryChip from '@/features/CategoryChip.jsx';
import PageContentPreloader from '@/features/preloaders/PageContentPreloader.jsx';
import Properties from '@/widgets/Properties.jsx';

export default function CatalogItemPage({ params }) {
  const item = dataCatalog.find((dataItem) => dataItem.id === params.stoneId);

  const DynamicThreeViewer = dynamic(
    () => import('@/entities/threeViewers/threeModelViewer.jsx'),
    {
      ssr: false,
      loading: () => <ThreeViewerFallback />,
    },
  );

  return (
    <>
      <DynamicThreeViewer modelPath={item.modelPath} />

      <Suspense fallback={<PageContentPreloader />}>
        <div className="mx-auto px-5 py-8 max-w-7xl flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-8 flex-shrink-1">
            <Text tag="h1" className="!text-3xl select-text" content={item.name} />
            <Text
              tag="h5"
              className="font-normal opacity-70 select-text"
              content={item.description}
            />
            {item.categories && (
              <div className="w-full flex flex-col gap-3 my-4">
                <Text tag="h4" className="" content="Категории" />
                <div className="w-full flex flex-row gap-3 flex-wrap">
                  {item.categories.map((category) => (
                    <CategoryChip key={category} category={category} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <Properties properties={item.properties} />
        </div>
      </Suspense>
    </>
  );
}
