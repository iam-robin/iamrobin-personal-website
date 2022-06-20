import Link from 'next/link';
import NavItem from "./NavItem";
import SearchIndicator from "./SearchIndicator";
import clsx from 'clsx';
import { ChevronRightIcon, ChevronLeftIcon, ArrowLeftIcon } from '@heroicons/react/outline';
import { useRouter } from "next/router";
import Logo from '../public/img/logo.svg';
import { useEffect, useRef } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

interface HeaderProps {
  type?: "project";
}

const onScroll = (header, logo, config) => {
  if (header && logo) {
    if (window.scrollY > 80) {
      header.classList.add('border-b-[1px]', 'border-grey-200', 'dark:border-grey-500');
      window.innerWidth >= parseInt(config.theme.screens.sm) && logo.querySelector('.logo').classList.add('scale-[0.7]');
    } else {
      header.classList.remove('border-b-[1px]', 'border-grey-200');
      window.innerWidth >= parseInt(config.theme.screens.sm) && logo.querySelector('.logo').classList.remove('scale-[0.7]');
    }
  }
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const router = useRouter();
  const headerRef = useRef();
  const logoRef = useRef();
  const fullConfig = resolveConfig(tailwindConfig);
  const projects = ['notionbudget', 'ohmy', 'sam', 'meaningfulanimations', 'mediacamp'];

  useEffect(() => {
    window.addEventListener('scroll', () => onScroll(headerRef.current, logoRef.current, fullConfig));

    return () => window.removeEventListener('scroll', () => onScroll(headerRef.current, logoRef.current, fullConfig));
  }, []);

  const getActiveProject = () => {
    return router.pathname.split('/')[2];
  };

  const getNextProject = () => {
    const currentIndex = projects.indexOf(getActiveProject());
    return projects[currentIndex - 1];
  }

  const getPrevProject = () => {
    const currentIndex = projects.indexOf(getActiveProject());
    return projects[currentIndex + 1];
  }

  return (
    <header
      className={clsx(
        'sticky z-20 top-[0] mt-4 bg-grey-100',
        'dark:bg-black',
        'sm:mt-20'
      )}
    >
      <div
        ref={headerRef}
        className='flex justify-between items-center py-4 mx-6 mdWithMargin:mx-auto max-w-screen-md'
      >
        {type === "project"
          ? <>
            <Link href="/projects">
              <a className='flex items-center'>
                <ArrowLeftIcon className='h-5 w-5 mr-2 ' />
                <span className='font-mono'>all projects</span>
              </a>
            </Link>
            <div className='flex space-x-4'>
              {
                getPrevProject() ?
                  <Link href={`/projects/${getPrevProject()}`}>
                    <a>
                      <ChevronLeftIcon className='h-5 w-5' />
                    </a>
                  </Link>
                  :
                  <ChevronLeftIcon className='h-5 w-5 text-grey-300' />
              }
              {
                getNextProject() ?
                  <Link href={`/projects/${getNextProject()}`}>
                    <a>
                      <ChevronRightIcon className='h-5 w-5' />
                    </a>
                  </Link>
                  :
                  <ChevronRightIcon className='h-5 w-5 text-grey-300' />
              }
            </div>
          </>
          : <>
            <Link href="/">
              <div
                ref={logoRef}
                className={clsx(
                  "h-8 w-8 cursor-pointer",
                  "sm:h-12 sm:w-12"
                )}
              >
                <Logo className={clsx(
                  'logo fill-black h-full transition-transform duration-300',
                  'dark:fill-grey-200'
                )} />
              </div>
            </Link>
            <div className='flex items-center'>
              <nav className={clsx(
                "text-base mr-6 hidden sm:block",
              )}>
                <ul className="list-none p-0 m-0">
                  <NavItem content="projects" route="projects" />
                  {/* <NavItem content="writing" route="writing" /> */}
                  <NavItem content="bookshelf" route="media" />
                  <NavItem content="photos" route="photos" />
                </ul>
              </nav>
              <SearchIndicator />
            </div>
          </>
        }
      </div>
    </header>
  );
}

export default Header;
