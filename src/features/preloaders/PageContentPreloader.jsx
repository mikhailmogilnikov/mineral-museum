import { Skeleton } from '@nextui-org/skeleton';

function PageContentPreloader() {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 py-8 flex flex-col md:flex-row gap-10">
      <div className="w-full flex flex-col gap-8 flex-shrink-1">
        <Skeleton className="w-56 h-9 rounded-2xl" />
        <Skeleton className="w-full h-56 rounded-2xl" />
        <div className="w-full flex flex-col gap-3 my-4">
          <Skeleton className="w-16 h-5 rounded-xl" />
          <div className="w-full flex flex-row gap-3 flex-wrap">
            <Skeleton className="w-20 h-6 rounded-full" />
            <Skeleton className="w-22 h-6 rounded-full" />
            <Skeleton className="w-28 h-6 rounded-full" />
          </div>
        </div>
      </div>

      <Skeleton className="w-full md:w-96 h-84 rounded-3xl flex-shrink-0" />
    </div>
  );
}

export default PageContentPreloader;
