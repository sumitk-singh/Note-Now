import {createContext, useContext, useState} from "react";

const MobileMenuContext = createContext();

const MobileMenuProvider = ({children}) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  return (
    <MobileMenuContext.Provider value={{mobileMenuToggle, setMobileMenuToggle}}>
      {children}
    </MobileMenuContext.Provider>
  );
};

const useMobileMenu = () => useContext(MobileMenuContext);

export {MobileMenuProvider, useMobileMenu};
