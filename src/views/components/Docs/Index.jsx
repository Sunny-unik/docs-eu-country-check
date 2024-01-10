import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";
import BundlephobiaData from "../BundlephobiaData";
import DocsPagination from "./DocsPagination";

function Docs() {
  const setGlobalData = useContext(GlobalContext)[1];

  useEffect(() => {
    setGlobalData({ activePage: "" });
  }, []);

  return (
    <Layout>
      <h1>Getting Started</h1>
      <p>
        This page is an overview of the <b>Eu-country-check</b> documentation
        and related resources.
      </p>
      <br />

      <p>
        <b>Eu-country-check</b> is a JavaScript package for provide facility to
        filter out those countries which comes under EU (European Union) or EEA
        (European Economic Area).
      </p>
      <hr />

      <BundlephobiaData />
      <hr />

      <h3>Something Missing?</h3>
      <p className="mt-2">
        If something is missing in the documentation or if you found some part
        confusing, please file an issue for the documentation repository with
        your suggestions for improvement at{" "}
        <a
          className="text-red"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Sunny-unik/docs-eu-country-check/issues"
        >
          github
        </a>
        . We love hearing from you!
      </p>

      <DocsPagination nextName="Installation" />
    </Layout>
  );
}

export default Docs;
