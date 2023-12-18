import { Skeleton } from '@nextui-org/skeleton';
import { Suspense } from 'react';
import MgriLogo from '@/shared/icons/MgriLogo.jsx';

function HeaderPreloader() {
  const LogoFallback = () => {
    <div className="h-full flex items-center gap-[10px] md:gap-5 z-20">
      <Skeleton className="w-10 h-10 rounded-xl" />
      <Skeleton className="w-36 md:w-64 h-10 rounded-xl" />
    </div>;
  };
	
  return (
    <div className="flex flex-row justify-between z-50 sticky top-0 h-16 px-5 bg-white dark:bg-black">
      <Suspense fallback={<LogoFallback />}>
        <div className="h-full flex items-center gap-[10px] md:gap-5 z-20">
          <MgriLogo size={38} />
          <h1 className="text-sm max-w-[10rem] font-bold md:text-xl md:max-w-fit">
            Минералогический музей
          </h1>
        </div>
      </Suspense>

      <div className="h-full flex flex-row gap-4 items-center z-20">
        <Skeleton className="w-10 md:w-56 h-10 rounded-xl" />
        <Skeleton className="w-10 h-10 rounded-xl" />
      </div>
    </div>
  );
}

export default HeaderPreloader;
