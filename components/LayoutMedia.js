import Header from "./Header";
import Footer from "./Footer";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import clsx from "clsx";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from 'next-themes';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const getActiveMedia = (router) => {
  return router.pathname.split('/')[2];
};

const mediaPages = ['books', 'music'];

const LayoutMedia = ({ children }) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(getActiveMedia(router));
  const { theme } = useTheme();
  const fullConfig = resolveConfig(tailwindConfig);

  useEffect(() => {
    setActiveRoute(getActiveMedia(router));
  }, [router]);

  const handleLinkClicked = () => {
    setActiveRoute(getActiveMedia(router));
  }

  return (
    <>
      <Header />
      <div className={
        clsx("mx-6 sm:mx-10 mdWithMargin:mx-auto max-w-screen-md",
        )}>
        <main className={clsx(
          "mt-8",
          "sm:mt-20"
        )}>
          <ul className="mt-20 mb-6">
            {mediaPages.map((mediaPage, i) => (
              <Link href={'/media/' + mediaPage} key={i}>
                <a
                  onClick={handleLinkClicked}
                  className={"font-mono text-xl mr-6 inline-block text-grey-300 dark:text-grey-400"}
                >
                  <RoughNotation
                    type="underline"
                    show={activeRoute == mediaPage}
                    color={theme === 'dark' ? fullConfig.theme.colors.accent.dark : fullConfig.theme.colors.accent.light}
                    strokeWidth={2}
                    iterations={2}
                    animationDelay={200}
                  >
                    <span className={`${(activeRoute == mediaPage ? 'dark:text-white text-black font-medium' : '')}`}>
                      {mediaPage}
                    </span>
                  </RoughNotation>
                </a>
              </Link>
            ))}
          </ul>
          {children}
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default LayoutMedia;
