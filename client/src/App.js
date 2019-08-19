/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { NavBar } from './components';
import { TermsOfService , PrivacyPolicy } from './views';
import uuid from 'uuid';
import {
  RootRouter,
  UsersRouter,
  TestRouter,
  NoMatchRouter,
  CasesRouter,
  AuthRouter
} from './routes/index';

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
          <Route key={uuid.v4()} exact path="/terms-of-service" component={TermsOfService} />
          <Route key={uuid.v4()} exact path="/privacy-policy" component={PrivacyPolicy} />
          {AuthRouter}
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
