import { PiMagnifyingGlassBold } from 'react-icons/pi';
import Text from '@/shared/primitives/Text.jsx';

function Search() {
  return (
    <div className="w-full h-full flex flex-row gap-2 px-3 items-center  justify-start rounded-xl bg-black/10 dark:bg-white/10">
      <PiMagnifyingGlassBold size={20} className="opacity-60 flex-shrink-0" />
      <Text tag="h5" className="opacity-60 flex-shrink-0" content="Поиск" />
    </div>
  );
}

export default Search;
