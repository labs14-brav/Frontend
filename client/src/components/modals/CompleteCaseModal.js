import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import axioswithAuth from "../../helpers/axioswithAuth";
import {
    Button,
    Dialog,
    IconButton,
    Typography
} from "@material-ui/core";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        width: "300px"
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    },
    openButton: {
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
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const OpenDialogueButton = withStyles(styles)(props => {
    console.log('dialogue button', props);
    return (
        <Button
            variant="outlined"
            color="primary"
            // className={classes.openButton}
            onClick={props.handlecompleteOpen}
        >
            Complete Case
        </Button>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

function CompleteCaseModal (props){
    console.log(props);
   const handleSubmit = (caseId) => {
        console.log('Case id', caseId);
        axioswithAuth()
        .put(`/cases/${caseId}/case-request-completed`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
       });

    };
        return (
            <>
                <OpenDialogueButton handlecompleteOpen={props.handlecompleteOpen} />
                <Dialog
                    onClose={props.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={props.completeopen}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={props.handleClose}
                    >
                        Are you sure you want to complete this case?
                    </DialogTitle>
                        <Button onClick={() => this.handleSubmit(this.props.caseId)} color="primary">
                            Yes, complete the case.
                        </Button>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </>
        );
}

export default CompleteCaseModal;