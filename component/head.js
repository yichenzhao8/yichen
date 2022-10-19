/** @format */

import React from "react";
import Head from "next/head";

export default function head() {
  return (
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PCHR3125ZL"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || []; 
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date()); 
        gtag('config', 'G-PCHR3125ZL');
        `,
        }}
      />

      <title>Yichen Zhao</title>
      <meta
        name="description"
        content="Hello, I'm a frontend developer and UI/Graphic designer."
      />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora&family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
