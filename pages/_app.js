/** @format */
import React, { useEffect, Suspense, useState } from "react";
import "../styles/globals.css";
import "../styles/nprogress.css";
import Head from "../component/head";
import Loading from "../component/loading";
import { inter } from "../assets/font";

import { useRouter } from "next/router";
import NProgress from "nprogress";

import CursorContextProvider from "../component/cursor/CursorContextProvider";
import { Cursor } from "../component/cursor/Cursor";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [preloading, setpreLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => setpreLoading(false), 2500);
    setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3000);
  }, []);

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
    <>
      {loading && <Loading isVisible={preloading} />}
      <CursorContextProvider>
        <Cursor />
        <Head />
        <main className={inter.className}>
          <Component {...pageProps} />
        </main>
      </CursorContextProvider>
    </>
  );
}

export default MyApp;
