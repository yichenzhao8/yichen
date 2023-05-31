/** @format */
import React, { useEffect } from "react";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from "../component/head";

import { useRouter } from "next/router";
import NProgress from "nprogress";

import CursorContextProvider from "../component/cursor/CursorContextProvider";
import { Cursor } from "../component/cursor/Cursor";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  });
  return (
    <CursorContextProvider>
      <Cursor />
      <Head />
      <Component {...pageProps} />
    </CursorContextProvider>
  );
}

export default MyApp;
