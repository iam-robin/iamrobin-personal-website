import '../styles/globals.css'
import Layout from "../components/Layout";
import LayoutWide from "../components/LayoutWide";
import LayoutMedia from "../components/LayoutMedia";
import LayoutProject from "../components/LayoutProject";
import CommandBar from '../components/CommandBar';
import { ThemeProvider } from "next-themes";

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
      <CommandBar>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </CommandBar>
    </ThemeProvider>
  );
}

export default MyApp
