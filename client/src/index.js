/**
 * Dependencies
 */

import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

/**
 * Render component to DOM
 */

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri="/home">
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
