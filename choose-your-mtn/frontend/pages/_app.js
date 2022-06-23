import { ThemeProvider } from "next-themes";
import Head from "next/head";

import siteMetadata from "@/content/siteMetadata";
import LayoutWrapper from "@components/LayoutWrapper";

import "@assets/css/tailwind.css";
import "typeface-open-sans";
import "typeface-merriweather";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme={siteMetadata.theme} enableSystem={true} attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
