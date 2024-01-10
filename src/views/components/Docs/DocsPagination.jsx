import React from "react";
import { NavLink } from "react-router-dom";

export default function DocsPagination({ previousName, nextName }) {
  if (!previousName && !nextName) return <></>;
  const routes = {
    "Getting Started": "/",
    Installation: "/install",
    Usage: "/usage",
  };

  return (
    <>
      <hr />
      <div className="flex pagination-wrapper">
        {previousName ? (
          <NavLink
            to={"/docs" + (routes[previousName] ? routes[previousName] : "")}
          >
            <div className="box">
              <div className="flex column gap-2">
                <h4 className="m-0">{"< "} Previous</h4>
                <h3 className="name">{previousName}</h3>
              </div>
            </div>
          </NavLink>
        ) : (
          <div className="flex-grow-1"></div>
        )}
        {previousName && nextName ? <div className="flex-grow-1"></div> : ""}
        {nextName ? (
          <NavLink to={"/docs" + (routes[nextName] ? routes[nextName] : "")}>
            <div className="box">
              <div className="flex column gap-2 align-items-end">
                <h4 className="m-0">Next {" >"}</h4>
                <h3 className="name">{nextName}</h3>
              </div>
            </div>
          </NavLink>
        ) : (
          <div className="flex-grow-1"></div>
        )}
      </div>
    </>
  );
}
