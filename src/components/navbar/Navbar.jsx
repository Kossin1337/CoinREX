import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <NavbarLogo />
        <NavbarMenu />
      </div>
    </div>
  );
};
