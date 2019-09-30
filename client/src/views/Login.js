import React, { useEffect, useState } from "react";
import {
  Card,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import { signInWithEmail } from "../store/actions/Auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles/_auth.js"

function Login(props) {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const handleSignInWithEmail = (e) => {
    e.preventDefault();
    props.signInWithEmail(credentials.email, credentials.password);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
        <p>Login with the following</p>
        <Divider variant="middle" />
        <Button
          className={classes.button}
          onClick={props.signinWithGoogle}
        >
          Login with Google
        </Button>
        <hr />
        OR
        <form onSubmit={handleSignInWithEmail} className={classes.loginForm}>
          <TextField
            className={classes.formInput}
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={onChange}
          />
          <TextField
            className={classes.formInput}
            label="Password"
            type="password"
            name="password"
            margin="normal"
            variant="outlined"
            onChange={onChange}
          />
          <Button type="submit" className={classes.button}>Login with email</Button>
        </form>
        <p className={classes.error}>{props.error}</p>
        <p className={classes.bottomTextContainer} >Don't have an account? <Link className={classes.bottomTextButton} to="/signup"><Button>Signup</Button></Link></p>
      </Card>
    </div>
  );
}

export default connect(null, { signInWithEmail })(Login);
