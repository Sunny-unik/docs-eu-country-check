import React from "react";
import { NavLink } from "react-router-dom";
import NewTabIcon from "./NewTabIcon";
import SimpleIcons from "./SimpleIcons";
import GitHubButton from "react-github-btn";

export default function Footer() {
  return (
    <footer className="dark w-100 vertical-space flex column justify-content-between">
      <div className="flex container justify-content-between">
        <div className="box">
          <h3 className="text-muted helvetica">Documentation</h3>
          <ul>
            <li>
              <NavLink to="/docs/install">Installation</NavLink>
            </li>
            <li>
              <NavLink to="/docs/usage">Usage</NavLink>
            </li>
          </ul>
        </div>

        <div className="box">something</div>
      </div>

      <div className="box text-center">
        <div>
          <a
            href="https://github.com/sunny-unik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcons
              name="github"
              alt="github profile link"
              width="20"
              height="20"
              color="edf2f5"
              darkModeColor="edf2f5"
            />
          </a>
          <GitHubButton
            href="https://github.com/sunny-unik/eu-country-check"
            data-color-scheme="no-preference: light; light: dark; dark: light;"
            data-icon="octicon-star"
            aria-label="Star Sunny-unik/eu-country-check on GitHub"
          >
            Star
          </GitHubButton>
          <a
            href="https://www.linkedin.com/in/sunny-gandhwani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcons
              name="linkedin"
              alt="linkedin profile link"
              width="20"
              height="20"
              color="edf2f5"
              darkModeColor="edf2f5"
            />
          </a>
          <GitHubButton
            href="https://github.com/sunny-unik/eu-country-check/issues"
            data-color-scheme="no-preference: light; light: dark; dark: light;"
            data-icon="octicon-issue-opened"
            aria-label="Issue in Sunny-unik/eu-country-check on GitHub"
          >
            Issue
          </GitHubButton>
          <a
            href="https://twitter.com/SunnyUnik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SimpleIcons
              name="twitter"
              alt="twitter profile link"
              width="20"
              height="20"
              color="edf2f5"
              darkModeColor="edf2f5"
            />
          </a>
        </div>

        <div>
          Copyright © 2023{" "}
          <a
            href="https://sunny-unik.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sunny Gandhwani
            <NewTabIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
