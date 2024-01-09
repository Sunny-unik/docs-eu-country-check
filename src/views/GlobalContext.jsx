import React, { useState } from "react";

export const GlobalContext = React.createContext();
export default function GlobalProvider({ children }) {
  const [GlobalData, setGlobalData] = useState({ activePage: "" });

  return (
    <GlobalContext.Provider value={[GlobalData, setGlobalData]}>
      {children}
    </GlobalContext.Provider>
  );
}
