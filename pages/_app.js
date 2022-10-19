/** @format */
import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";

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
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
