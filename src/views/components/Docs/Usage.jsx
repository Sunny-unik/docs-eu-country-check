import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";
import DocsPagination from "./DocsPagination";

export default function Usage() {
  const setGlobalData = useContext(GlobalContext)[1];

  useEffect(() => {
    setGlobalData({ activePage: "usage" });
  }, []);

  return (
    <Layout>
      <h1>Usage</h1>
      <DocsPagination previousName="Installation" />
    </Layout>
  );
}
