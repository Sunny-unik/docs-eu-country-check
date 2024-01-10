import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";
import DocsPagination from "./DocsPagination";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Install() {
  const setGlobalData = useContext(GlobalContext)[1];

  useEffect(() => {
    setGlobalData({ activePage: "install" });
  }, []);

  return (
    <Layout>
      <h1>Installation</h1>
      <p>
        This package is published on
        <a
          className="text-red"
          target="_blank"
          rel="noopener noreferrer"
          href="http://npmjs.com/"
        >
          npmjs.com
        </a>
        .
      </p>
      <br />

      <p>
        This package can be used by almost every JS package-managers like:{" "}
        <i>npm, yarn, pnpm, bun</i>.
      </p>
      <hr />

      <h3>Installation Commands for different package-managers</h3>
      <ul className="container">
        <li>
          <h5>Install with NPM</h5>
          <SyntaxHighlighter language="javascript" style={dracula}>
            npm i eu-country-check
          </SyntaxHighlighter>
        </li>
        <li>
          <h5>Install with YARN</h5>
          <SyntaxHighlighter language="javascript" style={dracula}>
            yarn add eu-country-check
          </SyntaxHighlighter>
        </li>
        <li>
          <h5>Install with PNPM</h5>
          <SyntaxHighlighter language="javascript" style={dracula}>
            pnpm add eu-country-check
          </SyntaxHighlighter>
        </li>
        <li>
          <h5>Install with BUN</h5>
          <SyntaxHighlighter language="javascript" style={dracula}>
            bun add eu-country-check
          </SyntaxHighlighter>
        </li>
      </ul>

      <DocsPagination previousName="Getting Started" nextName="Usage" />
    </Layout>
  );
}
