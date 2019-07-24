/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';

/**
 * Define component
 */

const MediatorCard = (props) => {
  return (
    <div className="card-container">
        <h3>{props.mediator.email}</h3>
    </div>
  );
};

/**
 * Export component
 */

export default MediatorCard;
