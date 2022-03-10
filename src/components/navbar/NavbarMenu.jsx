import React from "react";
import { NavLink } from "react-router-dom";

import "./NavbarMenu.scss";

export const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
        </li>
        {/* <li className="menu-item">
          <NavLink to="/markets">Markets</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/exchanges">Exchanges</NavLink>
        </li> */}
        <li className="menu-item">
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
      <button className="login-btn">Login</button>
    </div>
  );
};
