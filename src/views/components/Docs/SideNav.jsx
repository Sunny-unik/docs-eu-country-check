import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div className="flex column side-nav gap-2">
        <div className="box helvetica">
          <h4>
            <NavLink to="/docs" className="text-dark">
              Getting Started
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/docs/install" className="text-dark">
              Installation
            </NavLink>
          </h4>
          <h4>
            <NavLink to="/docs/usage" className="text-dark">
              Usage
            </NavLink>
          </h4>
        </div>
      </div>
      <div className="vr"></div>
    </>
  );
}
