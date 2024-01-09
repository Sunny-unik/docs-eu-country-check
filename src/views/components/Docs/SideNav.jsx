import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

export default function SideNav() {
  const [{ activePage }] = useContext(GlobalContext);

  return (
    <div className="flex column side-nav gap-2">
      <div className="box helvetica text-nowrap-deep">
        <h4>
          <NavLink
            to="/docs"
            className={activePage === "" ? "text-red" : "text-dark"}
          >
            Getting Started
          </NavLink>
        </h4>
        <h4>
          <NavLink
            to="/docs/install"
            className={activePage === "install" ? "text-red" : "text-dark"}
          >
            Installation
          </NavLink>
        </h4>
        <h4>
          <NavLink
            to="/docs/usage"
            className={activePage === "usage" ? "text-red" : "text-dark"}
          >
            Usage
          </NavLink>
        </h4>
      </div>
    </div>
  );
}
