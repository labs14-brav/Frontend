import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import { firebase } from "../helpers/index";

function Login({ loginDialog, closeLogin, fireRender, setFireRender }) {
  // useEffect(() => {
  //   if (loginDialog) {
  //     // console.log("effect fired");
  //     setFireRender(true);
  //   }
  // }, [loginDialog, setFireRender]);

  // useEffect(() => {
  //   // console.log("fireRender fire");
  //   if (fireRender) {
  //     // console.log("firebase fire");
  //     firebase();
  //   }
  // }, [fireRender]);

  return (
    <Card>
      <strong>Sign in with the following</strong>
    </Card>
    );
  }
  
  export default Login;


  // <Dialog open={loginDialog} onClose={closeLogin}>
  //   <div className="login">
  //     <div id="firebaseui-auth-container"></div>
  //     <div id="loader"></div>
  //   </div>
  // </Dialog>
