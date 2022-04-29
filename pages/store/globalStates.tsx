import React, { useContext, useState } from "react";

type ContextObj = {
  isScroll: Boolean;
  activateScroll: () => void;
};

const GlobalContext = React.createContext<ContextObj>({
  isScroll: false,
  activateScroll: async () => {},
});

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider: React.FC<{ children: any }> = ({ children }) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const activateScroll = () => {
    setIsScroll(true);
    setTimeout(() => {
      setIsScroll(false);
    }, 500);
  };
  const values: ContextObj = { isScroll, activateScroll };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};
