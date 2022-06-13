import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { MailIcon } from "../sidebar/svgIcons/MailIcon";
import { EmailVerifiedIcon } from "./icons/EmailVerifiedIcon";
import { EmailUnverifiedIcon } from "./icons/EmailUnverifiedIcon";

import "./UserProfile.scss";

export const UserProfile = () => {
  const { user } = useAuth0();

  /* sub info */
  const subInfo = user?.sub.split("|");
  /* email verification class */
  const verifiedEmail = user?.email_verified ? "verified" : "unverified";

  return (
    <div className="profile">
      <div className="profile-card">
        <img
          className="avatar"
          src={user?.picture}
          alt={`${user?.nickname} profile-pic`}
        />
        <div className="user-info">
          <span className="fullname">{`${user?.name}`}</span>
          <span className="nickname">{user?.nickname}</span>
        </div>
      </div>
      <div className="email-box">
        <MailIcon className="mail-icon" />
        <span>{user?.email}</span>
        <div className={`verification ${verifiedEmail}`}>
          {user?.email_verified ? (
            <EmailVerifiedIcon />
          ) : (
            <EmailUnverifiedIcon />
          )}
        </div>
      </div>
      <div className="sub-box">
        <div className="sub provider">{subInfo[0]}</div>
        <div className="sub id">{subInfo[1]}</div>
      </div>
      {/* {JSON.stringify(user, null, 2)} */}
    </div>
  );
};
