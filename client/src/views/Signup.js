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
  const [step, setStep] = useState(1);
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
      {step === 1 ?
    <Card className={classes.card}>
    <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
        <p>Signup with the following</p>
        <Divider variant="middle" />
        <Button
            onClick={() => setStep(2)}
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
            <Button onClick={() => setStep(2)} className={classes.button}>Signup with Email</Button>
        </form>
        <p class={classes.bottomText}>Already  have an account? <Link to="/login">Login</Link></p>
    </Card> :
    <Card className={classes.cardStep2}>
    <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
        <p>Tell us about yourself!</p>
        <Divider variant="middle" />
        <form className={classes.loginForm}>
        <TextField
          className={classes.formInput}
          label="Full Name"
          name="fullName"
          margin="normal"
          variant="outlined"
          />
          <div className={classes.locationContainer}>
            <TextField
              className={classes.formInput}
              label="City"
              name="city"
              margin="normal"
              variant="outlined"
              />
            <TextField
              className={classes.formInput}
              label="State"
              name="state"
              margin="normal"
              variant="outlined"
              />
          </div>
          <TextField
              className={classes.formInput}
              label="Full Name"
              name="languages"
              margin="normal"
              variant="outlined"
              />
        
            <TextField
              multiline
              className={classes.formInput}
              label="Bio"
              name="bio"
              margin="normal"
              variant="outlined"
              />
      
            <Button className={classes.button}>Signup</Button>
        </form>
        {/* <p class={classes.bottomText}>Already  have an account? <Link to="/login">Login</Link></p> */}
    </Card>
      }
  </div>
    );
  }
  
  export default Signup;
