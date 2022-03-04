import React from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

import "./NavbarLogo.scss";

export const NavbarLogo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo-image" src={logo} alt="t-rex logo" />
        <h1 className="logo-text">CoinRex</h1>
      </Link>
    </div>
  );
};
