/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { RootRouter, UsersRouter, TestRouter, NoMatchRouter, CasesRouter } from './routes/index';
import { Grid } from '@material-ui/core';
import { NavBar } from './components';
import { Landing, Login, ErrorBoundary, AuthCallback } from './views';
import uuid from 'uuid';
import { PrivateRoute } from "./routes/helpers/index";

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define component
 */

function App() {
  return (
    <BrowserRouter>
      { 
      localStorage.getItem("token") ?
      <Grid container style={{ height: '100vh'}} >
        <NavBar/>
        <Grid item xs={12} sm={12} lg={12} style={{ backgroundColor: '#ECF6FF'}}>
          <Switch>
            {RootRouter}
            {UsersRouter}
            {CasesRouter}
            {TestRouter}
            {NoMatchRouter}
          </Switch>
        </Grid>
      </Grid>
        :
        <Switch>
          <Route key={uuid.v4()} exact path="/" component={Landing} />
          <Route key={uuid.v4()} exact path='/auth' component={Login} />
          <PrivateRoute key={uuid.v4()} exact path="/auth/callback" component={AuthCallback} errorBoundary={ErrorBoundary} />
          <Redirect to='/' />
        </Switch>
      }
    </BrowserRouter>
  );
};

/**
 * Export component
 */

export default App;
