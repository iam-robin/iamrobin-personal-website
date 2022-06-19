import clsx from 'clsx';

interface HotKeyProps {
  text: string;
  size: "sm" | "md";
  shade: "normal" | "darker";
}

const HotKey: React.FC<HotKeyProps> = (props) => {
  const {text, size ="sm", shade = "normal"} = props;

  return (
    <kbd
      className={clsx(
        'flex items-center justify-center rounded p-1',
        size === "sm" && 'h-6 w-6',
        size === "md" && 'h-8 w-8',
        shade === "normal" && 'bg-grey-200 dark:bg-grey-500',
        shade === "darker" && 'bg-grey-200 dark:bg-grey-400',
      )}
    >
      <p
        className={clsx(
          'font-medium text-grey-400 font-sans',
          'dark:text-grey-300',
          size === "sm" && 'text-sm',
          size === "md" && 'text-regular'
        )}
      >{text}</p>
    </kbd>
  );
}

export default HotKey;
