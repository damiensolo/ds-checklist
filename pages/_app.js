
import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ChecklistsProvider } from "../src/utilities/checklistsContext";
import { ThemeProvider } from "../src/utilities/themeContext";
import "../pages/app.css";

// ScrollToTop component
const ScrollToTop = () => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);
  return null;
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Design System Checklist</title>
        <meta
          name="description"
          content="A checklist to help you plan, build and grow your design system."
        />
        <meta
          property="og:title"
          content="Design System Checklist"
        />
        <meta
          property="og:description"
          content="A checklist to help you plan, build and grow your design system."
        />
        <meta
          property="og:image"
          content="https://designsystemchecklist.com/meta-v2.png"
        />
        <meta
          property="twitter:title"
          content="Design System Checklist"
        />
        <meta
          property="twitter:description"
          content="A checklist to help you plan, build and grow your design system."
        />
        <meta
          property="twitter:image"
          content="https://designsystemchecklist.com/meta-v2.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <ChecklistsProvider>
          <ScrollToTop />
          <Component {...pageProps} />
          <Analytics />
        </ChecklistsProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
