import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import axioswithAuth from "../../helpers/axioswithAuth";
import InvoiceForm from "../InvoiceForm";
import {
    Button,
    Dialog,
    IconButton,
    TextField,
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
        color: "#5C90C1",
        borderColor: "#5C90C1",
        "&:hover": {
            borderColor: "#517EA8",
            color: "#517EA8"
        },
        "&:active": {
            borderColor: "#476e91",
            color: "#517EA8"
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
            Create Invoice
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

class InvoiceCaseModal extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = caseId => {
        console.log("Case id", caseId);
        // axioswithAuth()
        //     .put(`/cases/${caseId}/case-request-completed`)
        //     .then(res => {
        //         this.props.fetchCases();
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        this.setState({ open: false });
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
                        Invoice
                    </DialogTitle>
                    <DialogContent>
                        <p>
                            Fill out the hour and rate fields to generate an
                            invoice for this case.
                        </p>
                    </DialogContent>
                    <InvoiceForm
                        caseId={this.props.caseId}
                        handleClose={this.handleClose}
                    />
                    <DialogActions />
                </Dialog>
            </>
        );
    }
}

export default InvoiceCaseModal;
