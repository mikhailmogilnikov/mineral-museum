import { Progress } from '@nextui-org/progress';
import Text from '@/shared/primitives/Text.jsx';

function ModelPreloader() {
  return (
    <div className="absolute w-full max-w-[12rem] flex flex-col gap-2 self-center items-center justify-center">
      <Text tag="h5" className="font-medium" content="Загрузка модели..." />
      <Progress
        color="secondary"
        size="sm"
        isIndeterminate
        aria-label="Загрузка карты"
      />
    </div>
  );
}

export default ModelPreloader;
