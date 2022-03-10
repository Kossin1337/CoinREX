import React, { useState } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";
import { FaBars } from "react-icons/fa";

import "./Navbar.scss";

export const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <div className="navbar-mobile">
          <NavbarLogo />
          <FaBars
            className="menu-icon"
            onClick={() => setMenuActive((prevValue) => !prevValue)}
          />
        </div>
        <NavbarMenu menuActive={menuActive} />
      </div>
    </div>
  );
};
