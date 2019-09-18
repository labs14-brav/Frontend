/**
 * Dependencies
 */

import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { firebase } from "../helpers/index";

/**
 * Define view
 */

function Login({ loginDialog, closeLogin, fireRender, setFireRender }) {
  useEffect(() => {
    if (loginDialog) {
      // console.log("effect fired");
      setFireRender(true);
    }
  }, [loginDialog]);
  useEffect(() => {
    // console.log("fireRender fire");
    if (fireRender) {
      // console.log("firebase fire");
      firebase();
    }
  }, [fireRender]);

  return (
    <Dialog open={loginDialog} onClose={closeLogin}>
      <div className="login">
        <div id="firebaseui-auth-container"></div>
        <div id="loader"></div>
      </div>
    </Dialog>
  );
}

/**
 * Export view
 */

export default Login;
