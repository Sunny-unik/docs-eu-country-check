import React, { useContext, useEffect } from "react";
import Layout from "./Layout";
import { GlobalContext } from "../../GlobalContext";

export default function Install() {
  const [GlobalData, setGlobalData] = useContext(GlobalContext);
  useEffect(() => {
    setGlobalData({ activePage: "install" });
  }, []);

  return (
    <Layout>
      <h1>Installation</h1>
    </Layout>
  );
}
