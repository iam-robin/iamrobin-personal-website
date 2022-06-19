import HotKey from "./HotKey";
import { useKBar, VisualState } from "kbar";
import clsx from "clsx";
import { SearchIcon } from '@heroicons/react/outline';

const SearchIndicator = () => {
  const { query } = useKBar();
  return (
    <div
      className='flex items-center cursor-pointer'
      onClick={() =>
        query.setVisualState((vs) =>
          [VisualState.animatingOut, VisualState.hidden].includes(vs)
            ? VisualState.animatingIn
            : VisualState.animatingOut
        )
      }
    >
      <ul className={clsx(
        "space-x-1 hidden",
        "sm:flex"
      )}>
        <li><HotKey text="⌘"/></li>
        <li><HotKey text="k"/></li>
      </ul>
      <SearchIcon
        className={clsx(
          'h-7 w-7 ml-2 stroke-grey-600',
          'dark:stroke-grey-300',
          'sm:h-4 sm:w-4'
        )}
      />
    </div>
  );
}

export default SearchIndicator;
