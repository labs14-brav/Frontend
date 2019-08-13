/**
 * Dependencies
 */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./helpers/index";
import {
    ErrorBoundary,
    AdminHome,
    Login,
    StripeCallback
} from "../views/index";
import uuid from "uuid";

/**
 * Define router
 */

const RootRouter = [
    <Route
        key={uuid.v4()}
        exact
        path="/"
        render={() => <Redirect to="/cases" />}
    />,
    <Route
        key={uuid.v4()}
        path="/stripe-callback"
        render={() => <StripeCallback />}
    />,
    <Route
        key={uuid.v4()}
        path="/signin"
        render={() => <Redirect to="/users/login" />}
    />,
    <Route
        key={uuid.v4()}
        path="/login"
        render={() => <Redirect to="/users/login" />}
    />,
    <Route
        key={uuid.v4()}
        path="/signup"
        render={() => <Redirect to="/users/login" />}
    />,
    <Route
        key={uuid.v4()}
        path="/register"
        render={() => <Redirect to="/users/login" />}
    />,
    <Route
        key={uuid.v4()}
        path="/users/signin"
        render={() => <Redirect to="/users/login" />}
    />,
    <Route
        key={uuid.v4()}
        path="/users/signup"
        render={() => <Redirect to="/users/login" />}
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
    />
];

/**
 * Export router
 */

export default RootRouter;
