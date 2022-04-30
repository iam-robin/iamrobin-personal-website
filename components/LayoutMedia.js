import Header from "./Header";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

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
    <div className="mx-6 sm:mx-10 mdWithMargin:mx-auto mt-10 max-w-screen-md">
      <Header />
      <br />
      <ul>
        {mediaPages.map((mediaPage, i) => (
          <Link href={'/media/' + mediaPage} key={i}>
            <a
              onClick={handleLinkClicked}
              className={"p-1 mx-2 inline-block " + (activeRoute == mediaPage ? 'border-b-2 border-grey-200' : '')}
            >{mediaPage}</a>
          </Link>
        ))}
      </ul>
      <main className="mt-20">
        {children}
      </main>
    </div>
  );
}

export default LayoutMedia;
