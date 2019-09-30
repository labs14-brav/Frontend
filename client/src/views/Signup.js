import React, { useEffect, useState } from "react";
import {
  Dialog,
  Card,
  Divider,
  Input,
  TextField,
  Button
} from "@material-ui/core";
import { signupWithGoogle } from "../store/actions/Auth";
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
  const [user, setUser] = useState({
    name: "",
    city: "",
    state: "",
    languages: "",
    professional_bio: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const onChangeUserInfo = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

  const handleSignupWithGoogle = (e) => {
    e.preventDefault();
    props.signupWithGoogle(user);
    console.log("signing up with google");
  };

  const handleSignupWithEmail = (e) => {
    e.preventDefault();
    console.log("signing up with email");
  };

  return (
    <div className={classes.container}>
      {signupMethod === null ?
        <Card className={classes.card}>
          <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
          <p>Signup with the following</p>
          <Divider variant="middle" />
          <Button
            onClick={() => setSignupMethod("google")}
            className={classes.button}
          >
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
            <Button onClick={() => setSignupMethod("email")} className={classes.button}>Signup with Email</Button>
          </form>
          <p className={classes.bottomTextContainer}>Already  have an account? <Link className={classes.bottomTextButton} to="/login"><Button>Login</Button></Link></p>
        </Card> :
        <Card className={classes.cardStep2}>
          <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
          <p>Tell us about yourself!</p>
          <Divider variant="middle" />
          <form className={classes.loginForm} onSubmit={signupMethod === "email" ? handleSignupWithEmail : handleSignupWithGoogle}>
            <TextField
              className={classes.formInput}
              label="Full Name"
              name="name"
              margin="normal"
              variant="outlined"
              onChange={onChangeUserInfo}
            />
            <div className={classes.locationContainer}>
              <TextField
                className={classes.formInput}
                label="City"
                name="city"
                margin="normal"
                variant="outlined"
                onChange={onChangeUserInfo}
              />
              <TextField
                className={classes.formInput}
                label="State"
                name="state"
                margin="normal"
                variant="outlined"
                onChange={onChangeUserInfo}

              />
            </div>
            <TextField
              className={classes.formInput}
              label="Languages"
              name="languages"
              margin="normal"
              variant="outlined"
              onChange={onChangeUserInfo}

            />

            <TextField
              multiline
              className={classes.formInput}
              label="Bio"
              name="bio"
              margin="normal"
              variant="outlined"
              onChange={onChangeUserInfo}

            />

            <Button type="submit" className={classes.button}>Signup</Button>
          </form>
          <Button onClick={() => setSignupMethod(null)} className={classes.bottomTextStep2}>Go Back</Button>
        </Card>
      }
    </div>
  );
}

export default connect(null, { signupWithGoogle })(Signup);
