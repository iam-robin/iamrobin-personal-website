import clsx from 'clsx';
import Link from 'next/link';
import TwitterIcon from '../public/img/icons/twitter.svg';
import UnsplashIcon from '../public/img/icons/unsplash.svg';
import LinkedinIcon from '../public/img/icons/linkedin.svg';
import GithubIcon from '../public/img/icons/github.svg';

const Footer = () => {

  return (
    <footer className="justify-between items-end pt-24 pb-4 sm:pb-10 sm:flex">
      <div className="text-sm">
        <ul className="flex font-mono mb-1">
          {/* <li>
            <Link href="/colophon">
              <a>Colophon</a>
            </Link>
          </li>
          <li className='flex justify-center items-center mx-[6px]'>
            <div className={clsx(
              'w-1 h-1 bg-grey-300 rounded-full',
              'dark:bg-grey-400'
            )}></div>
          </li> */}
          <li>
            <Link href="/changelog">
              <a>Changelog</a>
            </Link>
          </li>
        </ul>
        <p
          className={clsx(
            'text-grey-300 text-sm',
            'dark:text-grey-400'
          )}
        >
          © Robin Spielmann {new Date().getFullYear()}
        </p>
      </div>
      <ul className="flex space-x-2 mt-2 -ml-2 sm:mt-[0px] sm:ml-0">
        <li>
          <a className="p-2 inline-block" href="https://www.linkedin.com/in/robin-spielmann-240ab322a/">
          <LinkedinIcon className="h-4 w-4 fill-[#0A66C2]" />
          </a>
        </li>
        <li>
          <a className="p-2 inline-block" href="https://github.com/iam-robin">
          <GithubIcon
              className={clsx(
                'h-4 w-4 fill-black',
                'dark:fill-grey-100'
              )}
            />
          </a>
        </li>
        <li>
          <a className="p-2 inline-block" href="https://twitter.com/iamrob_in">
            <TwitterIcon className="h-4 w-4 fill-[#1DA1F2]" />
          </a>
        </li>
        <li>
          <a className="p-2 inline-block" href="https://unsplash.com/@iam_robin">
            <UnsplashIcon
              className={clsx(
                'h-4 w-4 fill-black',
                'dark:fill-grey-100'
              )}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
