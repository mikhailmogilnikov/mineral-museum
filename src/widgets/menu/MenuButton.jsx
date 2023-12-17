import { Button } from '@nextui-org/button';
import clsx from 'clsx';
import { PiListBold } from 'react-icons/pi';

function MenuButton({ isMenuOpen, press }) {
  return (
    <Button
      type="button"
      aria-labelledby='Меню'
      isIconOnly
      radius="lg"
      onPress={press}
      className={clsx('bg-white/60 dark:bg-white/10 shadow-small', {
        'bg-black text-white dark:bg-white dark:text-black': isMenuOpen,
      })}
    >
      <PiListBold size={20} />
    </Button>
  );
}

export default MenuButton;
