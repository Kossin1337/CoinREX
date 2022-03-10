import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavbarMenu.scss";

export const NavbarMenu = ({ menuActive }) => {
  return (
    <div className={`navbar-menu ${menuActive}`}>
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/news">News</NavLink>
        </li>
      </ul>
    </div>
  );
};
