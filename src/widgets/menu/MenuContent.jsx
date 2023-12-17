import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Button } from '@nextui-org/button';
import ThemeSwitcher from '@/shared/ThemeSwitcher.jsx';

function MenuContent() {
  return (
    <ScrollShadow
      hideScrollBar
      className="w-full h-full flex flex-col gap-5 py-5"
    >
      <div className="w-full h-[8.5rem] flex flex-row gap-5 px-5 overflow-visible">
        <ThemeSwitcher />
        <Button className="w-full h-full bg-white dark:bg-white/10 rounded-[32px] shadow-base" />
      </div>

      <div className="w-full h-[4.5rem] flex flex-row gap-5 px-5 overflow-visible">
        <Button className="w-full h-full bg-white dark:bg-white/10 rounded-[30px] shadow-base" />
      </div>
    </ScrollShadow>
  );
}

export default MenuContent;
