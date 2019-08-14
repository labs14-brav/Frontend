/**
 * Dependencies
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import NoMatch from './NoMatch';

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

describe('NoMatch.js', () => {
  test('it renders without errors', () => {
    const route = '/nomatch'
    renderWithRouter(<NoMatch />, {route})
  });

  test('it has an alert', () => {
    const route = '/nomatch'
    const { getByTestId } = renderWithRouter(<NoMatch />, {route})

    expect(getByTestId('alert-pagenotfound').textContent).toBe('Page Not Found')
  });

  test('it has a link to return to the main page', () => {
    const route = '/nomatch'
    const { getByTestId } = renderWithRouter(<NoMatch />, {route})

    expect(getByTestId('link-returntomainpage').textContent).toBe('Return to main page')
    expect(getByTestId('link-returntomainpage').getAttribute('href')).toBe('/')
  });
});
