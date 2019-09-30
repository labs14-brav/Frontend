/**
 * Dependencies
 */

import uuid from "uuid";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./helpers/index";
import {
  StripeCallback,
  Login,
  Settings,
  MediatorRegistration,
  StripeCheckout,
  AdminHome,
  MessagingContainer,
  ErrorBoundary
} from "../views/index";

/**
 * Define router
 */

const UsersRouter = [
  <PrivateRoute
    key={uuid.v4()}
    exact
    path="/users"
    render={() => <Redirect to="/" />}
  />,
  <PrivateRoute
    key={uuid.v4()}
    path="/stripe-callback"
    render={() => <StripeCallback />}
  />,
  <Route
    key={uuid.v4()}
    path="/users/login"
    render={props => <Login {...props} />}
  />,
  <Route
    key={uuid.v4()}
    path="/users/register"
    render={props => <Login {...props} />}
  />,
  <PrivateRoute key={uuid.v4()} path="/users/settings" component={Settings} />,
  <PrivateRoute
    key={uuid.v4()}
    path="/users/messaging"
    component={MessagingContainer}
  />,
  <PrivateRoute
    key={uuid.v4()}
    path="/users/mediator-registration"
    component={MediatorRegistration}
  />,
  <PrivateRoute
    key={uuid.v4()}
    path="/stripe/checkout/:id"
    component={StripeCheckout}
    errorBoundary={ErrorBoundary}
  />,
  <PrivateRoute
    key={uuid.v4()}
    path="/admin"
    component={AdminHome}
    errorBoundary={ErrorBoundary}
  />
];

/**
 * Export router
 */

export default UsersRouter;
