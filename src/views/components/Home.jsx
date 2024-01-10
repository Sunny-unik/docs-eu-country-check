import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="vertical-space flex justify-content-between column">
      {/* Hero Section */}
      <div className="container small-vertical-space margin-auto text-center flex justify-content-center">
        <div className="small-margin-auto">
          <h1>Hello World!</h1>
          <h3>
            This is
            <a
              href="https://npmjs.com/package/eu-country-check"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code className="premium-color"> eu-country-check </code>
            </a>
            official website.
          </h3>
          <NavLink to="/docs">
            <button className="btn btn-masterful">
              <span className="icon">&#x1F680;</span>
              <span className="btn-txt">View Documentation</span>
              <span className="second-icon">&#x1F680;</span>
            </button>
          </NavLink>
        </div>
      </div>

      {/* Info Banner Section */}
      <div className="info-banner">
        <div className="container">
          <h4 className="helvetica text-wrap">
            This project help to check provided which countries are part of EU
            (European Union) or EEA (European Economic Area).
          </h4>
        </div>
      </div>
    </div>
  );
}
