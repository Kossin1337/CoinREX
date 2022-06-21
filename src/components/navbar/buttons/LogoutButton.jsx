import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogOutIcon } from "../icons/LogOutIcon";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="action-btn logout-btn" onClick={() => logout()}>
      <LogOutIcon />
    </button>
  );
};
