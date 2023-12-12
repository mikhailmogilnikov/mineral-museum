import { Button } from '@nextui-org/button';
import { PiListBold } from 'react-icons/pi';

function MenuButton({ isMenuOpen, press }) {
  return (
    <Button isIconOnly radius="lg" variant="flat" onPress={press} className={isMenuOpen && 'bg-black text-white dark:bg-white dark:text-black'}>
      <PiListBold size={20} />
    </Button>
  );
}

export default MenuButton;
