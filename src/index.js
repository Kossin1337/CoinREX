import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import { Provider } from "react-redux";
import store from "./app/store";

import "./index.scss";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clinetId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clinetId}
    redirectUri={window.location.origin}
  >
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);
