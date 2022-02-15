/** @format */
import React, { useState, useEffect } from "react";
import Loading from "../component/loading";
import "../styles/globals.css";
import "../styles/nprogress.css";
import { useRouter } from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.start();
      setLoading(true);
    };
    const handleStop = () => {
      NProgress.done();
      setLoading(false);
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
      <Loading loading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
