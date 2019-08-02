/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RootRouter, UsersRouter, TestRouter, NoMatchRouter, CasesRouter } from './routes/index';
import { Grid } from '@material-ui/core';
import { NavBar, SideNavBlock } from './components';
import { Landing } from './views';
import uuid from 'uuid';

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
      <Route key={uuid.v4()} exact path="/" component={Landing} />
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
    </BrowserRouter>
  );
};

/**
 * Export component
 */

export default App;
