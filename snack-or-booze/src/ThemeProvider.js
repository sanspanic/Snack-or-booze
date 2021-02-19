import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleMode = () => {
    setIsChecked((checked) => !checked);
  };
  return (
    <ThemeContext.Provider value={{ isChecked, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
