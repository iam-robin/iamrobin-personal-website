import Header from "./Header";

const LayoutWide = ({ children }) => {
    return (
        <div className="mx-6 sm:mx-10 xlWithMargin:mx-auto mt-10 max-w-screen-xl">
            <Header />
            <main className="mt-20">
                {children}
            </main>
        </div>
    );
}

export default LayoutWide;
