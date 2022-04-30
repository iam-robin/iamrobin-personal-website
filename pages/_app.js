import '../styles/globals.css'
import Layout from "../components/Layout";
import LayoutWide from "../components/LayoutWide";
import LayoutMedia from "../components/LayoutMedia";

const layouts = {
  LayoutDefault: Layout,
  LayoutWide: LayoutWide,
  LayoutMedia: LayoutMedia,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
