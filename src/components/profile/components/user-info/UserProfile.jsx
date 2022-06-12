import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./UserProfile.scss";

export const UserProfile = () => {
  const { user } = useAuth0();

  return (
    <div className="profile">
      <div className="profile-card">
        <img
          className="avatar"
          src={user.picture}
          alt={`${user.nickname} profile-pic`}
        />
        <div className="user-info">
          <span className="fullname">{`${user.name}`}</span>
          <span className="nickname">{user.nickname}</span>
        </div>
      </div>
      {JSON.stringify(user, null, 2)}
    </div>
  );
};
