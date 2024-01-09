import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";

export default function Usage() {
  const [GlobalData, setGlobalData] = useContext(GlobalContext);
  useEffect(() => {
    setGlobalData({ activePage: "usage" });
  }, []);

  return (
    <Layout>
      <h1>Usage</h1>
    </Layout>
  );
}
