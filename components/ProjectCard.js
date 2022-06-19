import Link from 'next/link';
import clsx from 'clsx';
import ArrowUpRightIcon from '../public/img/icons/arrowUpRight.svg';

const ProjectCard = (props) => {
  return (
    <Link
      href={props.externalLink ? props.link : "/" + props.link}
    >
      <a
        alt={"project card for " + props.title}
        className="transition-[transform,_box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]"
      >
        <div className={`${props.color} h-[160px] rounded-t flex justify-center items-center`}>
          {
            props.logo &&
            <img
              src={props.logo}
              alt={`${props.title} logo`}
              className={`${props.logoHeight ? props.logoHeight : "h-[35%]"}`}
            />
          }
        </div>
        <div className={clsx(
          "bg-white p-4 rounded-b",
          "dark:bg-grey-600"
        )}>
          <span className='inline-flex items-center'>
            <h2 className="inline">{props.title}</h2>
            {props.externalLink && <ArrowUpRightIcon className="h-2 w-2 ml-2 fill-grey-400" />}
          </span>
          {
            props.description &&
              <div
                className={clsx(
                  'text-grey-300 text-sm mt-1',
                  'dark:text-grey-400'
                )}
              >
                <p>{props.description}</p>
              </div>
          }
        </div>
      </a>
    </Link>
  );
}

export default ProjectCard;
