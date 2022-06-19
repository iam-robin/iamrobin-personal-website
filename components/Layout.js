import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const Layout = ({ children }) => {
  return (
    <div className={clsx(
      "flex flex-col mx-6 pt-4 min-h-screen sm:mx-10 mdWithMargin:mx-auto max-w-screen-md",
      "sm:pt-20"
    )}>
      <Header />
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
  );
}

export default Layout;
