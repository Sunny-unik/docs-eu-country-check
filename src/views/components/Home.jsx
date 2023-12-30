import React from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container vertical-space flex">
        <div className="margin-auto text-center">
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
        </div>
      </div>

      {/* Info Banner Section */}
      <div className="info-banner">
        <div className="container">
          <h4 className="helvetica">
            This project help to check provided which countries are part of EU
            (European Union) or EEA (European Economic Area).
          </h4>
        </div>
      </div>
    </>
  );
}
