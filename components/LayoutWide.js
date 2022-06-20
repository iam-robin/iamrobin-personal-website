import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const LayoutWide = ({ children }) => {
  return (
    <>
      <Header />
      <div className={clsx(
        "mx-6 sm:mx-10 xlWithMargin:mx-auto max-w-screen-xl"
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

export default LayoutWide;
