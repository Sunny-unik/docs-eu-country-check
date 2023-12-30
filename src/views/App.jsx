import React from "react";
import routes from "../shared/routes";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header className="dark">
        <Navbar />
      </header>
      <main>
        <Routes>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route key={path} path={path} element={<C {...rest} />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
