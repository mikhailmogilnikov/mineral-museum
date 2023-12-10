import { Button } from '@nextui-org/button';
import { PiListBold } from 'react-icons/pi';

function MenuButton() {
  return (
    <Button isIconOnly radius="lg" variant="flat">
      <PiListBold size={20} />
    </Button>
  );
}

export default MenuButton;
