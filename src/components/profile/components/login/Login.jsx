import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./Login.scss";

const Login = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className="login">
      <span>login panel</span>
      <input type="text" name="email"></input>
      <input type="password" name="password"></input>
    </div>
  );
};

export default Login;
