import { createContext, useState } from "react";
import themes from "../configs/styles";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [style, setStyle] = useState(themes[theme]);

  const handleTheme = (key) => {
    setTheme(key);
    setStyle(themes[key]);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleTheme, style }}>
      {children}
    </ThemeContext.Provider>
  );
};
