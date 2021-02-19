import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import ToggleSwitch from "./ToggleSwitch";

function NavBar() {
  const { isChecked } = useContext(ThemeContext);

  return (
    <div className={isChecked ? "light" : "dark"}>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <ToggleSwitch />
          </NavItem>
          <NavItem>
            <NavLink to="/snacks">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks">Drinks</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
