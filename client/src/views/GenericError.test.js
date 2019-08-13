/**
 * Dependencies
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import GenericError from './GenericError';

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
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

/**
 * Assertions
 */

describe('GenericError.js', () => {
  test('it renders without errors', () => {
    const route = '/'
    renderWithRouter(<GenericError />, {route})
  });

  test('it has a signup/login button', () => {
    const route = '/'
    const { getByTestId } = renderWithRouter(<GenericError />, {route})

    expect(getByTestId('error-alert').textContent).toBe('Oops, an error ocurred.')
    expect(getByTestId('error-link').textContent).toBe('Return to main page')
    expect(getByTestId('error-link').getAttribute('href')).toBe('/')
  });
});
