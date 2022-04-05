import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import { AppProps } from "next/app";
import { wrapper } from "src/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FontLoader />
      <Component {...pageProps} />
    </>
  );
}

// For perfomance purpose, they should be in style JSX and not in a css file
function FontLoader() {
  return (
    <>
      <style jsx>{`
        @font-face {
          font-family: "gheavy";
          src: url("/fonts/g-heavy.woff2") format("woff2");
          font-display: optional;
        }

        @font-face {
          font-family: "gbold";
          src: url("/fonts/g-bold.woff2") format("woff2");
          font-display: optional;
        }

        @font-face {
          font-family: "Bold";
          src: url("/fonts/Bold.woff2") format("woff2");
          font-display: optional;
        }

        @font-face {
          font-family: "Book";
          src: url("/fonts/Book.woff2") format("woff2");
          font-display: optional;
        }
        @font-face {
          font-family: "Heavy";
          src: url("/fonts/Heavy.woff2") format("woff2");
          font-display: optional;
        }
      `}</style>
    </>
  );
}

export default wrapper.withRedux(MyApp);
