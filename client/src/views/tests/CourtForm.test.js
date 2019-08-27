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
    expect(getByTestId('input-parties_involved').textContent).toBe('Dispute Participants​')
    expect(getByTestId('input-parties_contact_info').textContent).toBe('Participant Contact Info​')
    expect(getByTestId('input-dispute_amount').textContent).toBe('Dispute Amount - $​if applicable')
    expect(getByTestId('input-court_jurisdiction').textContent).toBe('Jurisdiction​or Court ID')
    expect(getByTestId('input-court_number').textContent).toBe('Case Number​')
    expect(getByTestId('input-court_filing_date').textContent).toBe('Case Filing Date​')
    expect(getByTestId('input-case_notes').textContent).toBe('Case Notes​if applicable')
    expect(getByTestId('input-description').textContent).toBe('Description of Conflict​')
  });
});
