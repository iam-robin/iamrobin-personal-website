import Header from "./Header";
import Footer from "./Footer";
import TextLink from "./TextLink";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import clsx from "clsx";

const getActiveMedia = (router) => {
  return router.pathname.split('/')[2];
};

const mediaPages = ['books', 'movies', 'music'];

const LayoutMedia = ({ children }) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState(getActiveMedia(router));

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
          <div className="flex space-x-4">
            <h1 className="text-2xl">books</h1>
            <h1 className="text-2xl text-grey-300">music</h1>
          </div>
          <p className="mt-2">
            I would like to read more books. Keeping a list of all the books I&apos;ve read and enjoyed will hopefully help me do that. Each book links to its corresponding page on <TextLink src="https://literal.club/" external>Literal</TextLink>.
          </p>
          {/* <h1 className="text-2xl">{activeRoute}</h1> */}
          {/* <ul className="mt-20">
            {mediaPages.map((mediaPage, i) => (
              <Link href={'/media/' + mediaPage} key={i}>
                <a
                  onClick={handleLinkClicked}
                  className={"text-sm mr-4 inline-block text-grey-200" + (activeRoute == mediaPage ? 'font-bold' : '')}
                >{mediaPage}</a>
              </Link>
            ))}
          </ul> */}
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
