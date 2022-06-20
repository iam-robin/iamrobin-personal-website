import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={clsx(
        "flex flex-col mx-6 min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-160px)] sm:mx-10 mdWithMargin:mx-auto max-w-screen-md",
      )}>
        <main className={clsx(
          "mt-8",
          "sm:mt-20"
        )}>
          {children}
        </main>
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
