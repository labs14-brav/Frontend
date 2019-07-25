/**
 * Dependencies
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Login, Settings, MediatorRegistration } from '../views/index';
import uuid from 'uuid';

/**
 * Define router
 */

const UsersRouter = [
  <Route key={uuid.v4()} exact path='/users' render={() => <Redirect to='/' />} />,
  <Route key={uuid.v4()} path='/users/signin' render={() => <Redirect to='/users/login' />} />,
  <Route key={uuid.v4()} path='/users/signup' render={() => <Redirect to='/users/login' />} />,
  <Route key={uuid.v4()} path='/users/login' render={(props) => <Login {...props} />} />,
  <Route key={uuid.v4()} path='/users/register' render={(props) => <Login {...props} />} />,
  <Route key={uuid.v4()} path='/users/settings' render={(props) => <Settings {...props} />} />,
  <Route key={uuid.v4()} path='/users/mediator-registration' render={(props) => <MediatorRegistration {...props} />} />,
];

/**
 * Export router
 */

export default UsersRouter;
