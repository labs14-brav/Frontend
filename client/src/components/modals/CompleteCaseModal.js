/**
 * Dependencies
 */

import React from "react";
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
    TextField,
    Typography
} from "@material-ui/core";

/**
 * Define styles
 */

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
    const { classes, onOpen } = props;
    return (
        <Button
            variant="outlined"
            color="primary"
            className={classes.openButton}
            onClick={onOpen}
        >
            Complete
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

/**
 * Define component
 */

class CompleteCaseModal extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = (caseId) => {
        console.log('Case id', caseId);
        axioswithAuth()
        .put(`/cases/${caseId}/case-request-completed`)
        .then((res) => {
            this.setState({ open: false });
            this.props.fetchCases();
        })
        .catch((err) => {
            console.log(err);
       });
    };

    render() {
        return (
            <>
                <OpenDialogueButton onOpen={this.handleClickOpen} />
                <Dialog
                    onClose={this.handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogTitle
                        id="customized-dialog-title"
                        onClose={this.handleClose}
                    >
                        Are you sure?
                    </DialogTitle>
                        <Button onClick={() => this.handleClose(this.props.caseId)} color="primary">
                            Yes, Complete
                        </Button>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

/**
 * Export component
 */

export default CompleteCaseModal;
