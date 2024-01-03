import React from "react";
import { NavLink } from "react-router-dom";
import NewTabIcon from "./NewTabIcon";
import SimpleIcons from "./SimpleIcons";
import GitHubButton from "react-github-btn";

export default function Footer() {
  return (
    <footer className="dark w-100 flex column justify-content-between">
      <div className="flex small-column container justify-content-around">
        <div className="box">
          <h3 className="text-muted helvetica">Documentation</h3>
          <ul>
            <li>
              <NavLink to="/docs">Getting Started</NavLink>
            </li>
            <li>
              <NavLink to="/docs/install">Installation</NavLink>
            </li>
            <li>
              <NavLink to="/docs/usage">Usage</NavLink>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3 className="text-muted helvetica">Insights</h3>
          <ul>
            <li>
              <a
                href="https://bundlephobia.com/package/eu-country-check"
                rel="noopener noreferrer"
                target="_blank"
              >
                Bundlephobia <NewTabIcon />
              </a>
            </li>
            <li>
              <a
                href="https://snyk.io/advisor/npm-package/eu-country-check"
                rel="noopener noreferrer"
                target="_blank"
              >
                <b>Synk</b>Advisor <NewTabIcon />
              </a>
            </li>
            <li>
              <a
                href="https://socket.dev/npm/package/eu-country-check"
                rel="noopener noreferrer"
                target="_blank"
              >
                Socket.dev <NewTabIcon />
              </a>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3 className="text-muted helvetica">More</h3>
          <ul>
            <li>
              <a
                href="https://classic.yarnpkg.com/en/package/eu-country-check"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yarn <NewTabIcon />
              </a>
            </li>
            <li>
              <a
                href="https://moiva.io/?npm=eu-country-check"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moiva <NewTabIcon />
              </a>
            </li>
            <li>
              <a
                href="https://npmtrends.com/eu-country-check"
                rel="noopener noreferrer"
                target="_blank"
              >
                Npmtrends <NewTabIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="box text-center">
        <div>
          <GitHubButton
            href="https://github.com/sunny-unik/eu-country-check/fork"
            data-color-scheme="no-preference: light; light: dark; dark: light;"
            data-icon="octicon-repo-forked"
            aria-label="Fork Sunny-unik/eu-country-check"
          >
            Fork
          </GitHubButton>
          &nbsp;
          <GitHubButton
            href="https://github.com/sunny-unik/eu-country-check"
            data-color-scheme="no-preference: light; light: dark; dark: light;"
            data-icon="octicon-star"
            aria-label="Star Sunny-unik/eu-country-check on GitHub"
          >
            Star
          </GitHubButton>
          &nbsp;
          <GitHubButton
            href="https://github.com/sunny-unik/eu-country-check/issues"
            data-color-scheme="no-preference: light; light: dark; dark: light;"
            data-icon="octicon-issue-opened"
            aria-label="Issue in Sunny-unik/eu-country-check on GitHub"
          >
            Issue
          </GitHubButton>
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
