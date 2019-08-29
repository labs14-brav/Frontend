/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import OutsideCourtForm from '../OutsideCourtForm';

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

describe('OutsideCourtForm.js', () => {
  test('it renders without errors', () => {
    const route = '/cases/new/outside'
    renderWithRouter(<OutsideCourtForm />, {route})
  });

  test('it has a heading', () => {
    const route = '/cases/new/outside'
    const { getByTestId } = renderWithRouter(<OutsideCourtForm />, {route})

    expect(getByTestId('heading-h3').textContent).toBe('Case Form')
  });

  test('it has required form inputs', () => {
    const route = '/cases/new/outside'
    const { getByTestId } = renderWithRouter(<OutsideCourtForm />, {route})

    expect(getByTestId('input-dispute_category').textContent).toBe('Dispute Type​​required')
    expect(getByTestId('input-parties_involved').textContent).toBe('Dispute Participants​Please list the names of the other parties involved in your dispute')
    expect(getByTestId('input-parties_contact_info').textContent).toBe('Participant Contact Information​Please provide an email or phone number for each participant listed above')
    expect(getByTestId('input-dispute_amount').textContent).toBe('Dispute Amount - Dollars​Please list the total monetary value of this dispute, if applicable.')
    expect(getByTestId('input-description').textContent).toBe('Description of Conflict​In your own words, please describe what happened.')
  });
});
