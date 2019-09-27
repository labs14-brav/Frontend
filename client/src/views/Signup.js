import React, { useEffect, useState} from "react";
import {
  Dialog,
  Card,
  Divider,
  Input,
  TextField,
  Button
} from "@material-ui/core";
import { firebase } from "../helpers/index";
import {Link} from "react-router-dom";
import useStyles from "./styles/_auth.js"

function Signup(props) {
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
    <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
        <p>Signup with the following</p>
        <Divider variant="middle" />
        <Button
            className={classes.button}
            onClick={props.authWithGoogle}
        >
            Signup with Google
        </Button>
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
            <Button className={classes.button}>Signup with Email</Button>
        </form>
        <p class={classes.bottomText}>Already  have an account? <Link to="/login">Login</Link></p>
    </Card>
  </div>
    );
  }
  
  export default Signup;
