import axios from "axios";
import React, { useState, useEffect } from "react";

export default function BundlephobiaData() {
  const [{ loading, error, data }, setPackageData] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    axios
      .get("https://bundlephobia.com/api/size?package=eu-country-check")
      .then((res) => setPackageData({ data: res.data, loading: false }))
      .catch((error) => setPackageData({ loading: false, error }));
  }, []);

  if (error) return <h4>Error in fetch Data!</h4>;
  return loading ? (
    <h6>Loading...</h6>
  ) : (
    <pre>
      <b>Here Bundlephobia's Size Report:</b>{" "}
      {JSON.stringify(data, replaceSizeData, 4)}
    </pre>
  );
}

function replaceSizeData(key, value) {
  const validSizeList = ["gzip", "size", "approximateSize"];
  if (!validSizeList.includes(key) || isNaN(value)) return value;

  typeof value === "string" && (value = Number(value));
  return value >= 1024
    ? parseFloat(value / 1024).toPrecision(2) + "KB"
    : value + "B";
}
