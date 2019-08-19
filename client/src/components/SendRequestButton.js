/**
 * Dependencies
 */

import React, { useState } from 'react';
import { axioswithAuth, mixpanel } from "../helpers/index";
import SimpleDialog from './modals/SimpleDialog';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    primarybutton: {
        margin: theme.spacing(1),
        color: '#5C90C1',
        borderColor: '#5C90C1',
        "&:hover": {
            borderColor: "#517EA8",
            color: "#517EA8",
        },
        "&:active": {
            borderColor: "#476e91",
            color: "#517EA8",
        }
    }
}))

/**
 *  Define component
 */

 function SendRequestButton(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    function handleClose() {
        setOpen(false);
      }
      function handleOpen() {
        setOpen(true);
      }

    const handleRequest = () => {
        let case_id = props.currentcase.id;

        axioswithAuth().post(`/mediators/${props.mediator.id}/cases`, {case_id})
        .then(res => {
            if (process.env.NODE_ENV === 'production') {
              mixpanel.track('Send mediator request for case', { distinct_id: localStorage.getItem('id') })
            }
            handleOpen();
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
        <>
            <Button className={classes.primarybutton} onClick={handleRequest} variant="outlined">
                Send Request
            </Button>
            <SimpleDialog onClose={handleClose}
                open={open}
                titleText={'Your request has been sent'}
                bodyText={`to ${props.mediator.name}`}
                redirect={'/cases'}
                redirectText={'Cases'} />
        </>
    )
}

/**
 * Export component
 */

 export default SendRequestButton;
