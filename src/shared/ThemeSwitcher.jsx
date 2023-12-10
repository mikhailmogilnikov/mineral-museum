'use client';

import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { Skeleton } from '@nextui-org/skeleton';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PiDevicesBold, PiMoonBold, PiSunBold } from 'react-icons/pi';

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [selectedKey, setSelectedKey] = useState(new Set([theme]));

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#000000');
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute('content', '#ffffff');
    }
  }, [resolvedTheme]);

  if (!mounted) return <Skeleton className="w-10 h-10 rounded-2xl" />;

  const previewIconSize = 20;

  return (
    <div>
      <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button isIconOnly radius="lg" variant="flat">
            {resolvedTheme === 'light' ? (
              <PiSunBold size={previewIconSize} />
            ) : (
              <PiMoonBold size={previewIconSize} />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Выбор темы оформления"
          variant="flat"
          closeOnSelect={false}
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKey}
          onSelectionChange={(newSelectedKey) => setSelectedKey(newSelectedKey)}
        >
          <DropdownSection
            title="Оформление"
            className="m-0 pt-1 flex flex-col gap-1"
          >
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
