import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";
import DocsPagination from "./DocsPagination";

export default function Install() {
  const setGlobalData = useContext(GlobalContext)[1];

  useEffect(() => {
    setGlobalData({ activePage: "install" });
  }, []);

  return (
    <Layout>
      <h1>Installation</h1>
      <DocsPagination previousName="Getting Started" nextName="Usage" />
    </Layout>
  );
}
