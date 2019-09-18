/**
 * Dependencies
 */

import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import { firebase } from "../helpers/index";

/**
 * Define view
 */

function Login({ loginDialog, closeLogin, test, setTest }) {
  useEffect(() => {
    if (loginDialog) {
      // console.log("effect fired");
      setTest(true);
    }
  }, [loginDialog]);
  useEffect(() => {
    // console.log("test fire");
    if (test) {
      // console.log("firebase fire");
      firebase();
    }
  }, [test]);

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
