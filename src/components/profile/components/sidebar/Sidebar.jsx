import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

import { UserIcon } from "./svgIcons/UserIcon";
import { SettingsIcon } from "./svgIcons/SettingsIcon";
import { FavoriteIcon } from "./svgIcons/FavoriteIcon";
import { InformationCircleIcon } from "./svgIcons/InformationCircleIcon";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <NavLink to="/profile" end>
            <span className="text">Profile</span>
            <div className="svg-box">
              <UserIcon />
            </div>
          </NavLink>
        </li>
        <li className="menu-item settings">
          <NavLink to="settings">
            <span className="text">Settings</span>
            <div className="svg-box">
              <SettingsIcon />
            </div>
          </NavLink>
        </li>
        <li className="menu-item favorite">
          <NavLink to="favorite">
            <span className="text">Favorite</span>
            <div className="svg-box">
              <FavoriteIcon />
            </div>
          </NavLink>
        </li>
        <li className="menu-item about">
          <NavLink to="about">
            <span className="text">About</span>
            <div className="svg-box">
              <InformationCircleIcon />
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

// className="menu-link profile"
