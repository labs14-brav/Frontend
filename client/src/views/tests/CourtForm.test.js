/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import CourtForm from '../CourtForm';

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

describe('CourtForm.js', () => {
  test('it renders without errors', () => {
    const route = '/cases/new/court'
    renderWithRouter(<CourtForm />, {route})
  });

  test('it has a heading', () => {
    const route = '/cases/new/court'
    const { getByTestId } = renderWithRouter(<CourtForm />, {route})

    expect(getByTestId('heading-h3').textContent).toBe('Case Form')
  });

  test('it has required form inputs', () => {
    const route = '/cases/new/court'
    const { getByTestId } = renderWithRouter(<CourtForm />, {route})

    expect(getByTestId('input-dispute_category').textContent).toBe('Case Type *​required')
    expect(getByTestId('input-parties_involved').textContent).toBe('Dispute Participants​Please list the names of the other parties involved in your dispute')
    expect(getByTestId('input-parties_contact_info').textContent).toBe('Participant Contact Information​Please provide an email or phone number for each participant listed above')
    expect(getByTestId('input-dispute_amount').textContent).toBe('Dispute Amount - Dollars​Please list the total monetary value of this dispute, if applicable.')
    expect(getByTestId('input-court_jurisdiction').textContent).toBe('Jurisdiction​Please list the Jurisdiction or Court ID of the Court where this case was filed.')
    expect(getByTestId('input-court_number').textContent).toBe('Case Number​')
    expect(getByTestId('input-court_filing_date').textContent).toBe('Case Filing Date​')
    expect(getByTestId('input-case_notes').textContent).toBe('Case Notes​Please provide any Case notes if any.')
    expect(getByTestId('input-description').textContent).toBe('Description of Conflict​In your own words, please describe what happened.')
  });
});
