/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';

/**
 * Define component
 */

 //name, license, experience, specialization, language, professional_bio

const MediatorCard = (props) => {
  return (
    <Card >
        <h3>{props.mediator.email}</h3>
    </Card>
  );
};

/**
 * Export component
 */

export default MediatorCard;
