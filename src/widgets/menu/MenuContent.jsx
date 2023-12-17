import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Button } from '@nextui-org/button';
import { PiListMagnifyingGlassBold, PiQuestionBold } from 'react-icons/pi';
import ThemeSwitcher from '@/shared/ThemeSwitcher.jsx';
import Text from '@/shared/primitives/Text.jsx';

function MenuContent() {
  return (
    <ScrollShadow
      hideScrollBar
      className="w-full h-full flex flex-col gap-5 py-5"
    >
      <div className="w-full h-[8.5rem] flex flex-row gap-5 px-5 overflow-visible">
        <ThemeSwitcher />
        <Button className="w-full h-full flex justify-start items-start bg-white dark:bg-white/10 rounded-[32px] shadow-base p-5">
          <Text tag="h4" content="Категории" />
          <div className="absolute -bottom-3 right-0 opacity-10">
            <PiListMagnifyingGlassBold size={110} />
          </div>
        </Button>
      </div>

      <div className="w-full h-[4.5rem] flex flex-row gap-5 px-5 overflow-visible">
        <Button className="w-full h-full flex justify-start px-6 bg-white dark:bg-white/10 rounded-[30px] shadow-base">
          <Text tag="h4" content="Подробнее о проекте" />
          <div className="absolute -bottom-6 right-3 opacity-10">
          <PiQuestionBold size={90} />
          </div>
        </Button>
      </div>
    </ScrollShadow>
  );
}

export default MenuContent;
