import { Button } from '@nextui-org/button';
import { PiCornersOutBold, PiCornersInBold } from 'react-icons/pi';
import { LuRotate3D } from "react-icons/lu";

function SettingsBar({
  autoRotate, isAutoRotate, fullscreen, isFullscreen,
}) {
  return (
    <div className="absolute right-3 bottom-3 flex flex-row gap-3">
      <Button size="sm" radius="md" variant="flat" onPress={autoRotate} isIconOnly>
        <LuRotate3D
          size={20}
          className={isAutoRotate ? 'opacity-100' : 'opacity-60'}
        />
      </Button>
      <Button size="sm" radius="md" onPress={fullscreen} variant="flat" isIconOnly>
        {isFullscreen ? (
          <PiCornersInBold size={20} className="opacity-100" />
        ) : (
          <PiCornersOutBold size={20} className="opacity-60" />
        )}
      </Button>
    </div>
  );
}

export default SettingsBar;
