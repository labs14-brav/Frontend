/**
 * Dependencies
 */

import React from 'react';
import { Route } from 'react-router-dom';
import Testing from '../views/Testing';
import uuid from 'uuid';

/**
 * Define router
 */

const TestRouter = [
  <Route key={uuid.v4()} exact path="/test" component={Testing} />
];

/**
 * Export router
 */

export default TestRouter;
