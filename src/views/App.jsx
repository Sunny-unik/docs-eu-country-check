import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [clientMessage, setClientMessage] = useState("");

  useEffect(() => {
    setClientMessage("Hello From React");
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <h1>Hello World!</h1>
        <h2>{clientMessage}</h2>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
