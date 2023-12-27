import React from "react";
import routes from "../shared/routes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Routes>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route key={path} path={path} element={<C {...rest} />} />
          ))}
        </Routes>
      </main>
    </>
  );
};

export default App;
