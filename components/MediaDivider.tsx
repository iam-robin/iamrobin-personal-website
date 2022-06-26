import clsx from "clsx";

interface MediaDividerProps {
  children: string;
}

const MediaDivider: React.FC<MediaDividerProps> = ({ children }) => {

  return (
    <h2 className={clsx(
      'mt-24 mb-12 text-grey-300 text-sm text-center relative uppercase',
      'after:content-[""] after:bg-grey-200 after:h-[1px] after:w-full after:absolute after:left-[0px] after:top-[10px]',
      'dark:after:bg-grey-500 dark:text-grey-400'
    )}>
      <span className='bg-grey-100 px-6 z-10 relative dark:bg-black'>
        {children}
      </span>
    </h2>
  );
}

export default MediaDivider;
