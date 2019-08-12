/**
 * Dependencies
 */

import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Landing from './Landing';

/**
 * Hooks
 */

afterEach(cleanup);

/**
 * Helper
 */

function renderWithRouter(ui) {
  return render(<Router>{ui}</Router>)
}

/**
 * Assertions
 */

describe('Landing.js', () => {
  test('it renders without errors', () => {
    // renderWithRouter(<Landing />)
  });
});
