` tags. I need to pay close attention to indentation, structure, and ensure that no parts of the original code are skipped or omitted.

```
<replit_final_file>
import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { ChecklistsProvider } from "../src/utilities/checklistsContext";
import { ThemeProvider } from "../src/utilities/themeContext";
import "./app.css";

const ScrollToTop = () => {
  const { pathname } = useRouter();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Design System Checklist</title>
        <meta name="title" content="Design System Checklist" />
        <meta
          name="description"
          content="An open-source checklist to help you plan, build and grow your design system."
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://designsystemchecklist.com/" />
        <meta property="og:title" content="Design System Checklist" />
        <meta
          property="og:description"
          content="An open-source checklist to help you plan, build and grow your design system."
        />
        <meta
          property="og:image"
          content="https://designsystemchecklist.com/meta-v2.png"
        />
        <meta property="og:image:alt" content="Design System Checklist" />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://designsystemchecklist.com/"
        />
        <meta property="twitter:title" content="Design System Checklist" />
        <meta
          property="twitter:description"
          content="An open-source checklist to help you plan, build and grow your design system."
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