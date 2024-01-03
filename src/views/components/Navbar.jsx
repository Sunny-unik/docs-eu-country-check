import React from "react";
import SimpleIcons from "./SimpleIcons";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const isDocsRoute = useLocation().pathname.includes("/docs");
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <NavLink to="/">Home</NavLink>
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
        {isDocsRoute && (
          <li
            className="nav-item"
            id="sideNavBtn"
            onClick={() =>
              document.querySelector(".side-nav").classList.toggle("open")
            }
          >
            <img
              src="/hamburger.svg"
              alt="sideMenu icon"
              width="28px"
              height="28px"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
