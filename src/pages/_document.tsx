import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <meta
          name="description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* OG (Social networks) */}
        <meta property="og:title" content="Šah Analiza" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sahanaliza.vercel.app" />
        <meta property="og:url" content="https://sahanaliza.vercel.app/" />
        <meta
          property="og:image"
          content="https://sahanaliza.vercel.app/favicon.png"
        />
        <meta
          property="og:description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Šah Analiza" />
        <meta name="twitter:domain" content="sahanaliza.vercel.app" />
        <meta name="twitter:url" content="https://sahanaliza.vercel.app/" />
        <meta
          name="twitter:description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://sahanaliza.vercel.app/favicon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
