/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Landing from './Landing';

/**
 * Hooks
 *   cleanup - Unmounts React trees that were mounted with render.
 */

afterEach(cleanup);

/**
 * Helper
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

describe('Landing.js', () => {
  test('it renders without errors', () => {
    const { container, getByText } = renderWithRouter(<Landing />);
  });
});
