import React, { useEffect, useState } from "react";

const App = () => {
  const [clientMessage, setClientMessage] = useState("");

  useEffect(() => {
    setClientMessage("Hello From React");
  }, []);

  return (
    <div className="container">
      <h1>Hello World!</h1>
      <h2>{clientMessage}</h2>
    </div>
  );
};

export default App;
