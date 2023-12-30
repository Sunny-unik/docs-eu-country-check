import React from "react";
import { NavLink } from "react-router-dom";
import NewTabIcon from "./NewTabIcon";

export default function Footer() {
  return (
    <footer className="dark w-100 vertical-space">
      <div className="flex container justify-content-between">
        <div>
          <h3>Documentation</h3>
          <ul>
            <li>
              <NavLink to="/docs/install">Installation</NavLink>
            </li>
            <li>
              <NavLink to="/docs/usage">Usage</NavLink>
            </li>
          </ul>
        </div>
        <div>something</div>
        <div>
          Copyright © 2023{" "}
          <a href="">
            Sunny Gandhwani <NewTabIcon />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
}
