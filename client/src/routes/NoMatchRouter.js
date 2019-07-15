/**
 * Dependencies
 */

import React from 'react';
import { Route } from 'react-router-dom';
import uuid from 'uuid';
import { NoMatch } from '../views/index';

/**
 * Define router
 */

const NoMatchRouter = [
  <Route key={uuid.v4()} component={NoMatch} />,
];

/**
 * Export router
 */

export default NoMatchRouter;
