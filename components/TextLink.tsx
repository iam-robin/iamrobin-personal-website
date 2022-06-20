import clsx from "clsx";
import ArrowUpRightIcon from '../public/img/icons/arrowUpRight.svg';

interface TextLinkProps {
  children: string;
  src: string;
  external?: boolean;
}

const TextLink: React.FC<TextLinkProps> = ({children, ...props }) => {
  const  { src, external = false } = props;

  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        'text-grey-400 inline-flex items-center cursor-pointer',
        'underline decoration-dotted underline-offset-4 decoration-grey-300',
        'hover:text-grey-300 hover:decoration-grey-200',
        'dark:text-grey-300 dark:hover:text-grey-400 dark:hover:decoration-grey-400'
      )}
    >
      {children}
      { external && <ArrowUpRightIcon className=" h-2 w-2 ml-[6px] fill-grey-300 dark:fill-grey-400" /> }
    </a>
  );
}

export default TextLink;
