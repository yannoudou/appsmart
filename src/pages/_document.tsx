// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * ****NOTE*****
 *
 * The big issue with font are the load time, so to make it faster
 * - i first have to preload them
 * -secondly if they do take too much time to load i still want the content to be visible with some default font-family type who are mostly
 * availble on majority of browser natively
 * - this ist important to prevent Cumulative Layout Shift, First Contentful Paint, (what google start to take in consideration for his Ranking)
 * so we can still use nice looking font family (which are really import for a characters identity) and not have any (less) perfomance  issue with it.
 */

export default class MyDocument extends Document<{ isCharacterion: boolean }> {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          {/* Preload font for performance */}
          <link
            rel="preload"
            href="/fonts/Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Book.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/g-bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/g-heavy.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Heavy.woff2"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
