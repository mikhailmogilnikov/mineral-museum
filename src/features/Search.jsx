import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { Button } from '@nextui-org/button';
import { Kbd } from '@nextui-org/kbd';
import Text from '@/shared/primitives/Text.jsx';

function Search({ closeMenu }) {
  return (
    <Button
      type="button"
      aria-labelledby="Поиск"
      radius="lg"
      className="w-10 min-w-0 md:w-56 h-10 flex flex-row md:px-3 items-center justify-center md:justify-between bg-white/60 shadow-small dark:bg-white/10"
      onPress={closeMenu}
    >
      <div className="flex flex-row gap-2">
        <PiMagnifyingGlassBold
          size={20}
          className="md:opacity-60 flex-shrink-0"
        />
        <Text
          tag="h5"
          className="hidden md:block opacity-60 flex-shrink-0"
          content="Поиск"
        />
      </div>
      <Kbd className="hidden md:block" keys={['shift']}>
        S
      </Kbd>
    </Button>
  );
}

export default Search;
