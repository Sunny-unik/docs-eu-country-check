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
      <div className="text-dark">
        This page is an overview of the <b>Eu-country-check</b> documentation
        and related resources.
      </div>
      <br />
      <p>
        <b>Eu-country-check</b> is a JavaScript package for provide facility to
        filter out those countries which comes under EU (European Union) or EEA
        (European Economic Area). Learn what React is all about on our homepage
        or in the tutorial.
      </p>
      <hr />
      <BundlephobiaData />
      <DocsPagination nextName="Installation" />
    </Layout>
  );
}

export default Docs;
