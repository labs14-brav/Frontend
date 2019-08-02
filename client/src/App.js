/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootRouter, UsersRouter, TestRouter, NoMatchRouter, CasesRouter } from './routes/index';
import { Grid } from '@material-ui/core';
import { NavBar, SideNavBlock } from './components';
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
      <Grid container style={{ height: '100vh' }} >
        <NavBar/>
        <SideNavBlock />
        <Grid item xs={8} sm={9} lg={10} style={{ backgroundColor: '#ECF6FF' }}>
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
        </Switch>
      }
    </BrowserRouter>
  );
};

/**
 * Export component
 */

export default App;
