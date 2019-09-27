import React, { useEffect, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Input from "@material-ui/core/Input";
import {Link} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles/_auth.js"
import { firebase } from "../helpers/index";

function Login(props) {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    signingUp: false,
});

const onChange = (e) => {
  setInputs({ ...inputs, [e.target.name]: e.target.value })
};


  return (
    <div className={classes.container}>
      <Card className={classes.card}>
      <img className={classes.logo} src="https://firebasestorage.googleapis.com/v0/b/brav-3077e.appspot.com/o/brav-blue-logo.jpeg?alt=media&token=b7622a34-510b-4760-9e07-1b78973869f4"></img>
        <p>Login with the following</p>
        <Divider variant="middle" />
        <button
            className={classes.button}
            onClick={props.authWithGoogle}
        >
            Login with Google
        </button>
        OR
        <form className={classes.loginForm}>
        <TextField
          className={classes.formInput}
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          />
        <TextField
          className={classes.formInput}
          label="Password"
          type="password"
          name="password"
          margin="normal"
          variant="outlined"
          />
            <button className={classes.button}>Login</button>
        </form>
        <p className={classes.error}>{props.error}</p>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </Card>
    </div>
    );
  }
  
  export default Login;
