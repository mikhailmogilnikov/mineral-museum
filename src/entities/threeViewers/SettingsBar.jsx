import { Button } from '@nextui-org/button';
import { PiCornersOutBold, PiCornersInBold, PiGearFine } from 'react-icons/pi';

function SettingsBar({
  autoRotate, isAutoRotate, fullscreen, isFullscreen,
}) {
  return (
    <div className="absolute right-3 bottom-3 flex flex-row gap-3">
      <Button size="sm" radius="md" variant="flat" onPress={autoRotate} isIconOnly>
        <PiGearFine
          size={20}
          className={isAutoRotate ? 'opacity-100' : 'opacity-70'}
        />
      </Button>
      <Button size="sm" radius="md" onPress={fullscreen} variant="flat" isIconOnly>
        {isFullscreen ? (
          <PiCornersInBold size={20} className="opacity-70" />
        ) : (
          <PiCornersOutBold size={20} className="opacity-70" />
        )}
      </Button>
    </div>
  );
}

export default SettingsBar;
