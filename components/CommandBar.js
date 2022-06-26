import * as React from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import {
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarResults,
  KBarSearch,
  useMatches,
  KBarProvider,
} from 'kbar';
import HotKey from "./HotKey";
import clsx from 'clsx';
import { MoonIcon, ArrowSmRightIcon, ClipboardIcon, SunIcon, CodeIcon, AtSymbolIcon, CogIcon, FolderIcon } from '@heroicons/react/outline';
import TwitterIcon from '../public/img/icons/twitter.svg';
import LinkedinIcon from '../public/img/icons/linkedin.svg';
import GithubIcon from '../public/img/icons/github.svg';
import ReadcvIcon from '../public/img/icons/readcv.svg';

const CommandBar = ({ children }) => {
  const router = useRouter();
  const { setTheme } = useTheme();

  const actions = [
    {
      id: 'theme',
      name: 'Change theme',
      keywords: 'interface color dark light',
      shortcut: ['t'],
      section: 'General',
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      keywords: 'dark theme',
      section: '',
      shortcut: ['d'],
      perform: () => setTheme('dark'),
      parent: 'theme',
    },
    {
      id: 'lightTheme',
      name: 'Light',
      keywords: 'light theme',
      section: '',
      shortcut: ['l'],
      perform: () => setTheme('light'),
      parent: 'theme',
    },
    {
      id: 'systemTheme',
      name: 'System',
      keywords: 'system theme',
      section: '',
      shortcut: ['s'],
      perform: () => setTheme('system'),
      parent: 'theme',
    },
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
    },
    {
      id: 'source',
      name: 'View Source',
      keywords: 'source code',
      section: 'General',
      perform: () =>
        window.open(
          'https://github.com/iam-robin/iamrobin-personal-website',
          '_blank',
        ),
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['n', 'w'],
      keywords: 'projects work',
      section: 'Navigation',
      perform: () => router.push('/projects'),
    },
    {
      id: 'bookshelf',
      name: 'Books',
      shortcut: ['n', 'b'],
      keywords: 'bookshelf reading books',
      section: 'Navigation',
      perform: () => router.push('/media/books'),
    },
    {
      id: 'music',
      name: 'Music',
      shortcut: ['n', 'm'],
      keywords: 'music album spotify',
      section: 'Navigation',
      perform: () => router.push('/media/music'),
    },
    {
      id: 'photos',
      name: 'Photos',
      shortcut: ['n', 'p'],
      keywords: 'photos photography images',
      section: 'Navigation',
      perform: () => router.push('/photos'),
    },
    {
      id: 'changelog',
      name: 'Changelog',
      shortcut: ['n', 'l'],
      keywords: 'changelog version changes',
      section: 'Navigation',
      perform: () => router.push('/changelog'),
    },
    // {
      //   id: 'colophon',
      //   name: 'Colophon',
      //   shortcut: ['n', 'c'],
      //   keywords: 'colophon code',
      //   section: 'Navigation',
      //   perform: () => router.push('/colophon'),
      // },
      {
        id: 'home',
        name: 'Home',
        shortcut: ['n', 'h'],
        keywords: 'home about me',
        section: 'Navigation',
        perform: () => router.push('/'),
      },
      {
        id: "email",
      name: "Mail",
      shortcut: ['c', 'm'],
      section: "Connect",
      keywords: "mail write email",
      subtitle: "hey@iamrob.in",
      // icon: <FaEnvelope />,
      perform: () => window.open("mailto:hey@iamrob.in"),
    },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['c', 'g'],
      keywords: 'github code',
      section: 'Connect',
      perform: () => window.open('https://github.com/iam-robin', '_blank'),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['c', 'l'],
      keywords: 'linkedin',
      section: 'Connect',
      perform: () =>
        window.open('https://www.linkedin.com/in/robin-spielmann-240ab322a/', '_blank'),
    },
    {
      id: 'twitter',
      name: 'Twitter',
      shortcut: ['c', 't'],
      keywords: 'twitter',
      section: 'Connect',
      perform: () => window.open('https://twitter.com/iamrob_in', '_blank'),
    },
    {
      id: 'readcv',
      name: 'read.cv',
      shortcut: ['c', 'r'],
      keywords: 'readcv cv',
      section: 'Connect',
      perform: () =>
        window.open('https://read.cv/iamrobin', '_blank'),
    },
    // {
    //   id: 'lumon',
    //   name: 'Lumon',
    //   keywords: 'severance appletv interface lumon',
    //   section: 'Projects',
    //   perform: () => router.push('/projects/lumon'),
    // },
    {
      id: 'geeenerated',
      name: 'Geeenerated',
      keywords: 'geeenerated generative-art art shop',
      section: 'Projects',
      perform: () => router.push('/projects/geeenerated'),
    },
    {
      id: 'notionbudget',
      name: 'Notion Budget',
      keywords: 'notionbudget notion budget data-visualization',
      section: 'Projects',
      perform: () => router.push('/projects/notionbudget'),
    },
    {
      id: 'ohmy',
      name: 'Oh my',
      keywords: 'ohmy browser-extension data-visualization',
      section: 'Projects',
      perform: () => router.push('/projects/ohmy'),
    },
    {
      id: 'sam',
      name: 'sam',
      keywords: 'sam',
      section: 'Projects',
      perform: () => router.push('/projects/sam'),
    },
    {
      id: 'meaningfulanimations',
      name: 'meaningful animations',
      keywords: 'meaningfulanimations thesis bachelor',
      section: 'Projects',
      perform: () => router.push('/projects/meaningfulanimations'),
    },
    {
      id: 'mediacamp',
      name: 'media.camp',
      keywords: 'mediacamp barcamp media.camp',
      section: 'Projects',
      perform: () => router.push('/projects/mediacamp'),
    }
  ];
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner
          className={clsx(
            'z-50 backdrop-blur-sm bg-grey-300 bg-opacity-30',
            'dark:bg-grey-500 dark:bg-opacity-50',
          )}
        >
          <KBarAnimator
            className={clsx(
              'max-w-[600px] mx-auto w-full border rounded-md overflow-hidden bg-white border-grey-300',
              'dark:bg-black dark:border-grey-500'
            )}
          >
            <KBarSearch
              className={clsx(
                'p-4 w-full border-b outline-none bg-white border-grey-200 text-black',
                'dark:text-grey-200 dark:bg-black dark:border-grey-500'
              )}
              placeholder="Search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <h2
            className={clsx(
              'border-l-2 px-4 pt-4 pb-2 text-sm uppercase tracking-wider text-grey-400',
            )}
            style={{
              borderColor: 'transparent',
            }}
          >
            {item}
          </h2>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  );
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        'p-4 flex items-center justify-between border-l-2 border-transparent cursor-pointer',
        active && 'bg-grey-100 dark:bg-grey-600'
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="flex items-center">
          {
            action.id === 'twitter' && <TwitterIcon className="h-4 w-4 mr-2 fill-[#1DA1F2]" /> ||
            action.id === 'linkedin' && <LinkedinIcon className="h-4 w-4 mr-2 fill-[#0A66C2]" /> ||
            action.id === 'github' &&
            <GithubIcon className={clsx(
              'h-4 w-4 mr-2 fill-black',
              'dark:fill-grey-300'
            )} /> ||
            action.id === 'email' &&
            <AtSymbolIcon className={clsx(
              'h-4 w-4 mr-2 text-black',
              'dark:text-grey-300'
            )} /> ||
            action.id === 'readcv' &&
            <ReadcvIcon className={clsx(
              'h-4 w-4 mr-2 fill-black',
              'dark:fill-grey-300'
            )} /> ||
            action.id === 'copy' &&
            <ClipboardIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.id === 'theme' &&
            <SunIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.id === 'lightTheme' &&
            <SunIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.id === 'darkTheme' &&
            <MoonIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.id === 'systemTheme' &&
            <CogIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.id === 'source' &&
            <CodeIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.section === 'Navigation' &&
            <ArrowSmRightIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} /> ||
            action.section === 'Projects' &&
            <FolderIcon className={clsx(
              'h-4 w-4 mr-2 text-grey-300',
              'dark:text-grey-400',
              active && '!text-grey-400'
            )} />
          }
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length && (
        <div className="grid-flow-col gap-2 hidden sm:grid">
          {action.shortcut.map((shortcut, key) => (
            <HotKey key={key} text={shortcut} shade={active ? 'darker' : 'normal'} />
          ))}
        </div>
      )}
    </div>
  );
});

export default CommandBar;
