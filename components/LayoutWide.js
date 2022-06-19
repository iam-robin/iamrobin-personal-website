import Header from "./Header";
import Footer from "./Footer";
import clsx from "clsx";

const LayoutWide = ({ children }) => {
  return (
    <div className={clsx(
      "mx-6 pt-4 sm:mx-10 xlWithMargin:mx-auto max-w-screen-xl",
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

export default LayoutWide;
