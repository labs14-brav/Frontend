/**
 * Dependencies
 */

import uuid from "uuid";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { NavBar } from "./components";
import { PrivateRoute } from "./routes/helpers/index";
import { UsersRouter, CasesRouter } from "./routes/index";
import { checkingUser, loggedIn, loggedOut } from "./store/actions/Auth";
import Firebase from "./helpers/firebase";
import AppLoader from "./components/loaders/AppLoader";
import {
  Landing,
  Login,
  Signup,
  TermsOfService,
  PrivacyPolicy,
  NoMatch,
  Onboarding
} from "./views";

/**
 * Import global styles
 */

import "./App.scss";

/**
 * Define component
 */

function App(props) {

  const authListener = () => {
    props.checkingUser();
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        props.loggedIn(user);
      } else {
        props.loggedOut()
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [])

  if (props.started) {
    return (
      <BrowserRouter>
        <Route component={AppLoader} />
      </BrowserRouter>)
  } else {
    return (
      <BrowserRouter>
        <Grid container style={{ height: "100vh" }}>
          <NavBar />
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            style={{ backgroundColor: "#ECF6FF" }}
          >
            <Switch>
              <Route key={uuid.v4()} exact path="/" component={Landing} />,
              <Route
                key={uuid.v4()}
                exact
                path="/terms-of-service"
                component={TermsOfService}
              />
              ,
              <Route key={uuid.v4()} exact path="/login" component={Login} />
              ,
              <Route key={uuid.v4()} exact path="/signup" component={Signup} />
              ,
              <Route key={uuid.v4()} exact path="/onboarding" component={Onboarding} />
              ,
              <Route key={uuid.v4()} exact path="/privacy-policy" component={PrivacyPolicy} />
              ,{UsersRouter}
              ,{CasesRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    )
  }
}

/**
 * Export component
 */
const mapStateToProps = state => ({
  started: state.authReducer.started,
  user: state.authReducer.user
});

export default connect(
  mapStateToProps,
  { checkingUser, loggedIn, loggedOut }
)(App);
