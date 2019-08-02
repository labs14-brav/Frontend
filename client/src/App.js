/**
 * Dependencies
 */

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RootRouter, UsersRouter, TestRouter, NoMatchRouter, CasesRouter } from './routes/index';
import { Grid } from '@material-ui/core';
import { NavBar, SideNavBlock } from './components';

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
      <Grid container style={{ height: '100vh' }} >
                  <NavBar/>
        <SideNavBlock />
                  <Grid item xs={8} sm={9} lg={10} style={{ backgroundColor: '#ECF6FF' }}>
        <Switch>
          {RootRouter}
          {UsersRouter}
          {TestRouter}
          {CasesRouter}
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
