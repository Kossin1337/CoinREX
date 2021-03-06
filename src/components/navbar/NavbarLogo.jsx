import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

import "./NavbarLogo.scss";

export const NavbarLogo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-image" src={logo} alt="t-rex" />
        <span className="logo-text">CoinRex</span>
      </Link>
    </div>
  );
};
