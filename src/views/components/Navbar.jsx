import React from "react";
import SimpleIcons from "./SimpleIcons";

export default function Navbar() {
  return (
    <nav className="navbar container">
      <div className="navbar-brand">
        <a href="/">Dashboard</a>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/#">Docs</a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/sunny-unik/eu-country-check"
            target="_blank"
          >
            <SimpleIcons name="npm" alt="npm logo" width="28px" height="28px" />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://npmjs.com/package/eu-country-check" target="_blank">
            <SimpleIcons
              name="github"
              alt="npm logo"
              darkModeColor="ffffff"
              width="28px"
              height="28px"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
