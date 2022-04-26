import React, { useContext, useState } from "react";

const GlobalContext = React.createContext({
  scroll: false,
  setScroll: () => {},
});
export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [scroll, setScroll] = useState(false);
  return (
    <GlobalContext.Provider value={{ scroll, setScroll }}>
      {children}
    </GlobalContext.Provider>
  );
};
