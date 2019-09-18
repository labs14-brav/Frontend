/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { firebase } from "../helpers/index";

/**
 * Define styles
 */

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: "50px"
  }
}));

/**
 * Define view
 */

function Login({ loginDialog, closeLogin, test, setTest }) {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // setIsLoading(false);
    if (loginDialog) {
      // console.log("effect fired");
      setTest(true);
      // setTimeout(() => {
      //   firebase();
      // }, 500);
    }
  }, [loginDialog]);
  useEffect(() => {
    // console.log("test fire");
    if (test) {
      // console.log("firebase fire");
      firebase();
    }
  }, [test]);

  // if (isLoading) return <LinearProgress />;

  return (
    <Dialog
      open={loginDialog}
      className={classes.card}
      onClose={closeLogin}
      style={{ backgroundColor: "rgb(212, 212, 211)", height: "100vh" }}
    >
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
