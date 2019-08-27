/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import MediatorRegistration from '../MediatorRegistration';

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

describe('MediatorRegistration.js', () => {
  test('it renders without errors', () => {
    const route = '/users/mediator-registration'
    renderWithRouter(<MediatorRegistration />, {route})
  });

  test('it has a heading', () => {
    const route = '/users/mediator-registration'
    const { getByTestId } = renderWithRouter(<MediatorRegistration />, {route})

    expect(getByTestId('heading-h3').textContent).toBe('Mediator Registration')
  });

  test('it has required form inputs', () => {
    const route = '/users/mediator-registration'
    const { getByTestId } = renderWithRouter(<MediatorRegistration />, {route})

    expect(getByTestId('input-name').textContent).toBe('Full Name​')
    expect(getByTestId('input-general_details').textContent).toBe('General Details')
    getByTestId('input-license')
    getByTestId('input-specialization')
    getByTestId('input-language')
    getByTestId('input-price')
  });
});
