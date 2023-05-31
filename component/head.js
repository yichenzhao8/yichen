/** @format */

import React from "react";
import Head from "next/head";
import Script from "next/script";

export default function head() {
  return (
    <Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PCHR3125ZL"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date()); 
        gtag('config', 'G-PCHR3125ZL');
        `,
        }}
      />
      <link rel="icon" href="/favicon.ico" />
      <title>Yi-Chen Zhao</title>
      <meta
        name="description"
        content="Hello, I'm YiChen, a Frontend Developer and UI/ Graphic Designer. I enjoy creating user-centric, delightful, and human experiences."
      />
    </Head>
  );
}
