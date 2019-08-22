/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Landing from '../Landing';

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

describe('Landing.js', () => {
  test('it renders without errors', () => {
    const route = '/'
    renderWithRouter(<Landing />, {route})
  });

  test('it has a signup/login button', () => {
    const route = '/'
    const { getByTestId } = renderWithRouter(<Landing />, {route})

    expect(getByTestId('signup-button').textContent).toBe('signup')
    expect(getByTestId('signup-link').getAttribute('href')).toBe('/auth')
    expect(getByTestId('login-button').textContent).toBe('login')
    expect(getByTestId('login-link').getAttribute('href')).toBe('/auth')
  });
});
