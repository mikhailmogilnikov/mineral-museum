import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { PiListBold } from "react-icons/pi";
import { Tooltip } from "@nextui-org/tooltip";
import { Kbd } from "@nextui-org/kbd";
import Text from "@/shared/primitives/Text";

function MenuButton({ isMenuOpen, press }) {
  return (
    <Tooltip
      classNames={{content: ['p-1 shadow-large']}}
      offset={10}
      content={
        <div className="w-full flex flex-row gap-2 justify-center items-center pl-2">
          <Text tag="h5" content="Меню" />
          <Kbd keys={["shift"]}>D</Kbd>
        </div>
      }
    >
      <Button
        type="button"
        aria-labelledby="Меню"
        isIconOnly
        radius="lg"
        onPress={press}
        className={clsx("bg-white/60 dark:bg-white/10 shadow-small", {
          "bg-black text-white dark:bg-white dark:text-black": isMenuOpen,
        })}
      >
        <PiListBold size={20} />
      </Button>
    </Tooltip>
  );
}

export default MenuButton;
