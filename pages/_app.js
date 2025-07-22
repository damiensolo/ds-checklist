import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { ChecklistsProvider } from "../src/utilities/checklistsContext";
import { ThemeProvider } from "../src/utilities/themeContext";
import "../src/assets/styles/reset.css";
import "../src/assets/styles/variables.css";
import "../src/assets/fonts/sneak.css";
import "./app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Design System Checklist</title>
        <meta name="description" content="An open-source checklist to help you plan, build and grow your design system." />
      </Head>
      <ThemeProvider>
        <ChecklistsProvider>
          <Component {...pageProps} />
          <Analytics />
        </ChecklistsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;