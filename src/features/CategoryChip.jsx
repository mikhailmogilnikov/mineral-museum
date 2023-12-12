import { Button } from '@nextui-org/button';
import categoriesColors from '@/entities/categoriesColors.js';
import Text from '@/shared/primitives/Text.jsx';

function CategoryChip({ category }) {
  const sameCategory = categoriesColors.find(
    (colorCategory) => colorCategory.categoryName === category,
  );

  return (
    <Button variant='light' className="w-fit h-6 flex flex-row gap-2 justify-start items-center p-3 border-2 border-black/10 dark:border-white/10 rounded-full cursor-pointer">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: sameCategory.categoryColor }}
      />
      <Text tag="h5" content={category} />
    </Button>
  );
}

export default CategoryChip;
