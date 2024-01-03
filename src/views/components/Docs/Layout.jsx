import React from "react";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex vertical-space container docs-container">
      <SideNav />
      {children}
    </div>
  );
}
