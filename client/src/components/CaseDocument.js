/**
 * Dependencies
 */

import React, { useState } from 'react';
import { documentsRef } from '../helpers/firebase';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/**
 * Define component
 */

function CaseDocument(props) {
    const [link, setLink]= useState('');
    const fileRef = documentsRef.child(`${props.case.id}/${props.document.file_name}`);

    function handleClick(e) {
        e.preventDefault();

        fileRef.getDownloadURL()
            .then(url => {
                console.log('getDownloadURL', url)
            })
            .catch(err => {
                console.error(err);
            })
    }
    return(
        <>
            <li>
                <Typography>{props.document.file_name}</Typography>
                <Button onClick={handleClick} variant="outlined"> Download File </Button>
            </li>
        </>
    )
}

/**
 * Export component
 */

export default CaseDocument;
