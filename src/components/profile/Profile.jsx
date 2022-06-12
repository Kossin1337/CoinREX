import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";

import { Sidebar } from "./components/sidebar/Sidebar";
import { UserProfile } from "./components/user-info/UserProfile";
import { FavoriteCoins } from "./components/favoriteCoins/FavoriteCoins";
import { Settings } from "./components/settings/Settings";
import { About } from "./components/about/About";

import "./Profile.scss";

export const Profile = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="profile-wrapper">
        <div className="content">
          <Sidebar />
          <Routes>
            <Route index path="/" element={<UserProfile />}></Route>
            <Route path="favoriteCoins" element={<FavoriteCoins />}></Route>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    )
  );
};
