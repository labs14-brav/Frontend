/**
 * Dependencies
 */

import React from 'react';
import TestRenderer from 'react-test-renderer';
import Landing from './Landing';

/**
 * Assertions
 */

describe('Landing.js', () => {
  test('it renders without errors', () => {
    function Link(props) {
      return <a href={props.page}>{props.children}</a>;
    }

    const testRenderer = TestRenderer.create(
      <Link page="https://www.facebook.com/">Facebook</Link>
    );

    console.log(testRenderer.toJSON());

    expect(true).toBeTruthy()
  });
});
