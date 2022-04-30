import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="mx-6 sm:mx-10 mdWithMargin:mx-auto mt-10 max-w-screen-md">
            <Header />
            <main className="mt-20">
                {children}
            </main>
        </div>
    );
}

export default Layout;
