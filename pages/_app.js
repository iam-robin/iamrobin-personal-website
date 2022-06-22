import '../styles/globals.css'
import Layout from "../components/Layout";
import LayoutWide from "../components/LayoutWide";
import LayoutMedia from "../components/LayoutMedia";
import LayoutProject from "../components/LayoutProject";
import CommandBar from '../components/CommandBar';
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const layouts = {
  LayoutDefault: Layout,
  LayoutWide: LayoutWide,
  LayoutMedia: LayoutMedia,
  LayoutProject: LayoutProject,
};

function MyApp({ Component, pageProps }) {
  const LayoutProvider = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>iamrobin</title>
        <meta charset="UTF-8" />
        <meta name="keywords" content="iamrobin portfolio robin spielmann" />
        <meta name="author" content="Robin Spielmann" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script data-goatcounter="https://iamrobin.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
      </Head>
      <CommandBar>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </CommandBar>
    </ThemeProvider>
  );
}

export default MyApp
