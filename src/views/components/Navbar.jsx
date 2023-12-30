import React from "react";
import SimpleIcons from "./SimpleIcons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <NavLink to="/">Intro</NavLink>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/docs">Docs</NavLink>
        </li>
        <li className="nav-item">
          <a
            href="https://npmjs.com/package/eu-country-check"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcons name="npm" alt="npm logo" width="28px" height="28px" />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/sunny-unik/eu-country-check"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcons
              name="github"
              alt="npm logo"
              color="fff"
              darkModeColor="fff"
              width="28px"
              height="28px"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
