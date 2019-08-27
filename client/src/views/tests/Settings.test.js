/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
// import Settings from '../Settings';

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

describe.skip('Settings.js', () => {
  test('it renders without errors', () => {
    const route = '/users/settings'
    renderWithRouter(<Settings />, {route})
  });

  test('it has a link to the "Become a Mediator" form', () => {
    const route = '/users/settings'
    const { getByTestId } = renderWithRouter(<Settings />, {route})

    expect(getByTestId('link-mediator-registration').textContent).toBe('Become a Mediator')
    expect(getByTestId('link-mediator-registration').getAttribute('href')).toBe('/users/mediator-registration')
  });

  test('it has a button to deactivate account', () => {
    const route = '/users/settings'
    const { getByTestId } = renderWithRouter(<Settings />, {route})

    expect(getByTestId('button-deactivate-account').textContent).toBe('Deactivate Account')
  });
});
