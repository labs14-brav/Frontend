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
        color: '#E55557',
        borderColor: '#E55557',
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
            className={classes.openButton}
            onClick={onOpen}
        >
            Decline
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

class AcceptCaseModal extends React.Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    };
    
    handleClose = () => {
        axioswithAuth()
        .put(`/cases/${this.props.caseId}/case-request-declined`)
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
                        <Button onClick={this.handleClose} color="primary">
                            Yes, Decline
                        </Button>
                    <DialogActions>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default AcceptCaseModal;