import Footer from "./Footer";
import Header from "./Header";
import clsx from "clsx";

const LayoutProject = ({ children }) => {
    return (
        <div className={clsx(
          "flex flex-col mx-6 pt-4 min-h-screen sm:mx-10 mdWithMargin:mx-auto max-w-screen-md",
          "sm:pt-20"
        )}>
            <Header type="project" />
            <main className="mt-16">
                {children}
            </main>
            <div className="mt-auto">
              <Footer />
            </div>
        </div>
    );
}

export default LayoutProject;
