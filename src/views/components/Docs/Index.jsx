import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";

function Docs() {
  const [DocsData, setDocsData] = useContext(GlobalContext);
  useEffect(() => {
    setDocsData({ activePage: "index" });
  }, []);

  return (
    <Layout>
      <h1>Getting Started</h1>
    </Layout>
  );
}

export default Docs;
