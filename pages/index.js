import Link from 'next/link';
import MarkerLink from "../components/MarkerLink";
import clsx from 'clsx';
import Head from "next/head";
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>hello - iamrobin</title>
        <meta
          name="description"
          content="home page of the personal website of robin spielmann iamrobin"
          />
          {
            theme === "light"
            ? <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-light.png" />
            : <link rel="icon" type="image/png" sizes="32x32" href="/favicons/32x32-dark.png" />
          }
      </Head>
      <h1 className={clsx(
        'text-xl',
        'dark:text-grey-300',
        'sm:text-2xl'
      )}>
        <div>
          Hey I am Robin Spielmann, a
          <span className='hidden sm:inline'>
            <MarkerLink type="circle" delay={600} text="frontend developer" />
          </span>
          <span className='sm:hidden'> frontend developer </span>
          based in Munich specializing in component-driven development and design systems.
          I really enjoy a well-functioning symbiosis of thoughtful usability, pleasing designs and clean code.
        </div>
        <div className='mt-4'>
          Besides&nbsp;
          <Link href="/projects">
            <a>
              <MarkerLink type="underline" delay={1400} text="building things" />
            </a>
          </Link>
          &nbsp;for the web I occasionally take&nbsp;
          <Link href="/photos">
            <a>
              <MarkerLink type="underline" delay={2200} text="photographs," />
            </a>
          </Link>
          &nbsp;create&nbsp;
          <Link href="https://www.instagram.com/geeenerated/">
            <a className='inline-block'>
              <MarkerLink type="underline" delay={3000} text="generative art" />
            </a>
          </Link>
          &nbsp;and try to read more&nbsp;
          <Link href="/media">
            <a>
              <MarkerLink type="underline" delay={3800} text="books." />
            </a>
          </Link>
          {/* , and get inspired by all kinds of
          <Link href="/media">
            <a>
              <LinkText type="underline" delay={3000} text="media" />
            </a>
          </Link> */}
        </div>
      </h1>
    </>
  )
};

Home.layout = "LayoutDefault";

export default Home;
