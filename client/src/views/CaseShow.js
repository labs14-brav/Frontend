/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

/**
 * Locals
 */


/**
 * Define view
 */

//  Switch 1 in the link to :id when we have cases.
const CaseShow = props => {
  return (
    <>
        <h3> Your cases: </h3>
        <Link to="/cases/1/mediator-search"> Find a Mediator </Link>
    </>
  )
};

/**
 * Export view
 */

export default CaseShow;
