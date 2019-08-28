/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import MediatorCasesShow from '../MediatorCasesShow';

/**
 * Hooks
 *   cleanup - Unmounts React trees that were mounted with render.
 */

afterEach(cleanup);

/**
 * Helpers
 */

function renderWithRouter(
  ui,
  {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  }
}

/**
 * Assertions
 */

describe.skip('MediatorCasesShow.js', () => {
  test('it renders without errors', () => {
    const route = '/mediator-cases'
    renderWithRouter(<MediatorCasesShow />, {route})
  });
});
