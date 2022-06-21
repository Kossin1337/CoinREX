import React from "react";
import { NavLink } from "react-router-dom";
import { LoginButton } from "./buttons/LoginButton";
import { LogoutButton } from "./buttons/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileIcon } from "./icons/ProfileIcon";

import "./NavbarMenu.scss";

export const NavbarMenu = ({ menuActive }) => {
  const { user, isAuthenticated } = useAuth0();

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
        {isAuthenticated ? (
          <li className="menu-item profile">
            <NavLink to="/profile">
              {user?.nickname || <span>Profile</span>}
              <ProfileIcon />
            </NavLink>
            <LogoutButton />
          </li>
        ) : (
          <li className="menu-item">
            <LoginButton />
          </li>
        )}
      </ul>
    </div>
  );
};
