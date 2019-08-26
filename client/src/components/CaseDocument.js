import React, { useEffect, useState } from 'react';
import { documentsRef } from '../helpers/firebase';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function CaseDocument(props) {
    return(
        <>
            <li>
                <Typography>{props.document.file_name}</Typography>
                <Button variant="outlined"> Download File </Button>
            </li>
        </>
    )
}

export default CaseDocument;