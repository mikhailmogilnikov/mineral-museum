import { Skeleton } from '@nextui-org/skeleton';

function ThreeViewerFallback() {
  return (
    <div className="relative w-full h-[65vh] border-b-1 border-black/[0.15] dark:border-y-white/[0.15]">
      <div className="absolute right-3 bottom-3 flex flex-row gap-3">
        <Skeleton className="w-8 h-8 rounded-xl" />
        <Skeleton className="w-8 h-8 rounded-xl" />
      </div>
    </div>
  );
}

export default ThreeViewerFallback;
