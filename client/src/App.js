/**
 * Dependencies
 */

import uuid from 'uuid';
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { NavBar } from './components';
import { PrivateRoute } from './routes/helpers/index';
import { UsersRouter, CasesRouter } from './routes/index';
import {
  Landing,
  Login,
  TermsOfService,
  PrivacyPolicy,
  ErrorBoundary,
  AuthCallback,
  NoMatch
} from './views';

/**
 * Import global styles
 */

import './App.scss';

/**
 * Define component
 */

function App() {
  if (localStorage.getItem('token')) {
    return (
      <BrowserRouter>
        <Grid container style={{ height: '100vh'}} >
          <NavBar/>
          <Grid item xs={12} sm={12} lg={12} style={{ backgroundColor: '#ECF6FF'}}>
            <Switch>
              <Route key={uuid.v4()} exact path='/' render={() => <Redirect to='/cases' />}/>,
              {UsersRouter}
              {CasesRouter}
              <Route key={uuid.v4()} component={NoMatch} />
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route key={uuid.v4()} exact path='/' component={Landing} />,
          <Route key={uuid.v4()} exact path='/terms-of-service' component={TermsOfService} />,
          <Route key={uuid.v4()} exact path='/privacy-policy' component={PrivacyPolicy} />,
          <Route key={uuid.v4()} exact path='/auth' component={Login} />,
          <PrivateRoute key={uuid.v4()} exact path='/auth/callback' component={AuthCallback} errorBoundary={ErrorBoundary} />,
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    )
  }
};

/**
 * Export component
 */

export default App;
