/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import UserCaseShow from '../UserCaseShow';

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

describe.skip('UserCaseShow.js', () => {
  test('it renders without errors', () => {
    const route = '/cases'
    renderWithRouter(<UserCaseShow />, {route})
  });

  test('it has a button to create a case', () => {
    const route = '/cases'
    const { getByTestId } = renderWithRouter(<UserCaseShow />, {route})

    expect(getByTestId('button-create-case').textContent).toBe('Create a Case')
  });
});
