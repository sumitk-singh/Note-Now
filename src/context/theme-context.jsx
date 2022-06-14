import {createContext, useContext, useState} from "react";

const ThemeContext = createContext();

const currentTheme = localStorage.getItem("theme");

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(currentTheme ?? "light-theme");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme};
