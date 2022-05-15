/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import "../styles/styles.css";
import "../styles/about.css";
import "../styles/portfolio.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/f4cee9cd6d.js" crossOrigin="anonymous" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
