import React, { useEffect, useState } from "react";
import {
  Card,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import { signUpWithGoogle, signUpWithEmail } from "../store/actions/Auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useStyles from "./styles/_auth.js"

function Signup(props) {
  const classes = useStyles();
  const [signupMethod, setSignupMethod] = useState(null);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const handleSignupWithEmail = (e) => {
    e.preventDefault();
    props.signUpWithEmail(credentials.email, credentials.password);
  };

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <img className={classes.logo} src={require("../images/brav-logo.png")}></img>
        <p>Signup with the following</p>
        <Divider variant="middle" />
        <Button onClick={props.signUpWithGoogle} className={classes.button}>
          Signup with Google
        </Button>
        <hr />
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
          <Button onClick={handleSignupWithEmail} className={classes.button}>Signup with Email</Button>
        </form>
        <p className={classes.bottomTextContainer}>Already  have an account? <Link className={classes.bottomTextButton} to="/login"><Button>Login</Button></Link></p>
      </Card>
    </div>
  );
}

export default connect(null, { signUpWithGoogle, signUpWithEmail })(Signup);
