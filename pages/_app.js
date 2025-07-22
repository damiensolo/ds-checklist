import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import Layout from "src/components/Layout";
import ChecklistsContextProvider from "src/utilities/checklistsContext";
import ThemeContextProvider from "src/utilities/themeContext";

import "src/assets/styles/reset.css";
import "src/assets/styles/variables.css";
import "src/assets/fonts/sneak.css";
import "./app.css";

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ChecklistsContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeContextProvider>
    </ChecklistsContextProvider>
  );
}