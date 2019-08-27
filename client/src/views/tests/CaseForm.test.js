/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import CaseForm from '../CaseForm';

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

describe('CaseForm.js', () => {
  test('it renders without errors', () => {
    const route = '/cases/new'
    renderWithRouter(<CaseForm />, {route})
  });

  test('it has a link to a court and non-court case form', () => {
    const route = '/'
    const { getByTestId } = renderWithRouter(<CaseForm />, {route})

    expect(getByTestId('button-courtcase').textContent).toBe('Court Referral')
    expect(getByTestId('button-non-courtcase').textContent).toBe('Non-Court Referral?')
  });
});
