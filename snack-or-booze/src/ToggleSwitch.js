import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { toggleMode, isChecked } = useContext(ThemeContext);
  const handleCheck = () => {
    toggleMode();
  };

  return (
    <div className="switch">
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={isChecked}
          onChange={handleCheck}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
