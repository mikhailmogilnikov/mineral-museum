'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from '@nextui-org/dropdown';
import { Button } from '@nextui-org/button';
import { PiDevicesBold, PiMoonBold, PiSunBold } from 'react-icons/pi';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [selectedKey, setSelectedKey] = useState(theme);
  let themeIcon;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const previewIconSize = 20;

  switch (theme) {
    case 'system':
      themeIcon = <PiDevicesBold size={previewIconSize} />;
      break;
    case 'light':
      themeIcon = <PiSunBold size={previewIconSize} />;
      break;
    case 'dark':
      themeIcon = <PiMoonBold size={previewIconSize} />;
      break;
    default:
      throw new Error('undefined theme');
  }

  console.log(theme, selectedKey);

  return (
    <div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button isIconOnly radius="lg" variant="flat" className="capitalize">
            {themeIcon}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection example"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKey}
          onSelectionChange={setSelectedKey}
        >
          <DropdownSection title="Оформление" className="m-0 pt-1 flex flex-col gap-1">
            <DropdownItem
              key="light"
              onPress={() => setTheme('light')}
              startContent={<PiSunBold />}
            >
              Светлое
            </DropdownItem>
            <DropdownItem
              key="dark"
              onPress={() => setTheme('dark')}
              startContent={<PiMoonBold />}
            >
              Тёмное
            </DropdownItem>
            <DropdownItem
              key="system"
              onPress={() => setTheme('system')}
              startContent={<PiDevicesBold />}
            >
              Системное
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ThemeSwitcher;
