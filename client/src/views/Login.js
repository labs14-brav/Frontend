/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
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

function Login(props) {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(false);
    firebase();
  }, []);

  // if (isLoading) return <LinearProgress />;

  return (
    <div className="login">
      <Card
        className={classes.card}
        style={{ backgroundColor: "rgb(212, 212, 211)", height: "100vh" }}
      >
        <div id="firebaseui-auth-container"></div>
        <div id="loader"></div>
      </Card>
    </div>
  );
}

/**
 * Export view
 */

export default Login;
