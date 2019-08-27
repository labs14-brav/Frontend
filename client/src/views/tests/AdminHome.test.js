/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import AdminHome from '../AdminHome';

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

describe('AdminHome.js', () => {
  test('it renders without errors', () => {
    const route = '/admin'
    renderWithRouter(<AdminHome />, {route})
  });

  test('it has a heading', () => {
    const route = '/admin'
    const { getByTestId } = renderWithRouter(<AdminHome />, {route})

    expect(getByTestId('heading-h1').textContent).toBe('Request List')
  });
});
