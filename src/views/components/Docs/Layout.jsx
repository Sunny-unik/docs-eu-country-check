import React from "react";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <div className="flex vertical-space container docs-container">
      <SideNav />
      <span className="flex-grow-1 bg-highlight p-4">
        <div className="box">{children}</div>
      </span>
    </div>
  );
}
