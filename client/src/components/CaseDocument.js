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
        console.log('fileRef', fileRef)

        // fileRef.getMetadata().then(function(metadata) {
        //   // Metadata now contains the metadata for 'images/forest.jpg'
        // }).catch(function(error) {
        //   console.error(err);
        // });

        fileRef.getDownloadURL().then(url => {
          console.log('getDownloadURL', url)

          let img = document.getElementById('document-image');
          img.src = url;
        })
        .catch(err => {
          console.error(err);
        })
    }
    return(
        <>
            <li>
                <Button onClick={handleClick} variant="outlined" className="my-1">View</Button> {props.document.file_name}
            </li>
        </>
    )
}

/**
 * Export component
 */

export default CaseDocument;
