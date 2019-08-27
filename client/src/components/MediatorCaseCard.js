/**
 * Dependencies
 */

import React, { useState } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AcceptCaseModal from "./modals/AcceptCaseModal";
import DeclineCaseModal from "./modals/DeclineCaseModal";
import CompleteCaseDialog from "./modals/CompleteCaseDialog";
import InvoiceCaseModal from "./modals/InvoiceCaseModal";
import Typography from "@material-ui/core/Typography";
import CaseOverviewDialog from "./modals/CaseOverviewDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandshake,
    faUsers,
    faClock
} from "@fortawesome/free-solid-svg-icons";

/**
 * Import styles
 */

import "./styles/UserCaseCard.scss";

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    submitbutton: {
        justifyContent: "center"
    },
    modal: {
        position: "absolute",
        margin: "0 auto"
    },
    paper: {
        position: "absolute",
        top: "25%",
        left: "40%",
        width: "25%",
        height: 300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: "none",
        display: "flex",
        justifyContent: "center"
    },
    actions: {
        display: "flex",
        justifyContent: "center"
    },
    cardcontainer: {
        marginBottom: "10px",
        paddingBottom: "10px"
    },
    content: {
        display: "flex",
        justifyContent: "space-between"
    },
    court: {
        display: "block",
        color: "#5C90C1",
        fontWeight: 500,
        paddingBottom: "35px"
    },
    label: {
        color: "#5C90C1"
    },
    info: {},
    right: {
        textAlign: "end"
    }
}));

function getModalStyle() {}

/**
 * Define component
 */

const MediatorCaseCard = props => {
    //created_at: "2019-08-16 16:42:15"
    //court_case: 0 or 1

    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [fullopen, setFullOpen] = useState(false);
    const [completeopen, setCompleteOpen] = useState(false);
    const [textState, setText] = useState("");
    const classes = useStyles();

    /**
     * Modal functions
     */

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handlefullOpen = () => {
        setFullOpen(true);
    };
    const handlefullClose = () => {
        setFullOpen(false);
    };

    const handlecompleteClose = () => {
        setCompleteOpen(false);
    };

    const handlecompleteOpen = () => {
        setCompleteOpen(true);
    };
    /**
     * These two functions are for the text input in the modal
     */

    const handleChanges = e => {
        setText(e.target.value);
    };

    const timeStamp = moment(
        props.case.created_at,
        "YYYY-MM-DD HH:mm:ss"
    ).format("MMMM Do YYYY");

    //Need to update link in Mediator-Search link to the proper case ID when possible.
    return (
        <>
            <Card className={classes.cardcontainer}>
                <CardContent className={classes.content}>
                    <div className={classes.left}>
                        <Typography
                            className={classes.label}
                            variant="overline"
                        >
                            {" "}
                            Dispute <FontAwesomeIcon icon={faHandshake} />{" "}
                            Category:
                        </Typography>
                        <Typography className={classes.info}>
                            {" "}
                            {props.case.dispute_category}{" "}
                        </Typography>
                        <Typography
                            className={classes.label}
                            variant="overline"
                        >
                            Dispute <FontAwesomeIcon icon={faUsers} />{" "}
                            Participants:
                        </Typography>
                        <Typography className={classes.info}>
                            {" "}
                            {`${props.case.case_initiator}, ${
                                props.case.parties_involved
                            }`}
                        </Typography>
                    </div>
                    <div className={classes.right}>
                      {props.case.court_case === 1 ? <Typography variant="overline" className={classes.court}> Court Case </Typography> : <Typography variant="overline" className={classes.court}> Non-Court Case </Typography>}
                      <Typography className={classes.label} variant="overline"> Case <FontAwesomeIcon icon={faClock} /> Created:</Typography>
                      <Typography className={classes.info}>{timeStamp}</Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.actions}>
                    {props.case.case_declined_at === null &&
                    props.case.case_accepted_at === null &&
                    props.case.case_completed_at === null ? (
                        <AcceptCaseModal
                            fetchCases={props.fetchCases}
                            caseId={props.case.id}
                        />
                    ) : null}

                    {props.case.case_declined_at === null &&
                    props.case.case_accepted_at === null &&
                    props.case.case_completed_at === null ? (
                        <DeclineCaseModal
                            fetchCases={props.fetchCases}
                            caseId={props.case.id}
                        />
                    ) : null}

                    {props.case.case_accepted_at &&
                    props.case.case_declined_at === null &&
                    props.case.case_completed_at === null ? (
                        <Button onClick={handlecompleteOpen}>
                            Complete Case
                        </Button>
                    ) : null}

                    {props.case.case_accepted_at &&
                    props.case.case_declined_at === null &&
                    props.case.case_completed_at === null ? (
                        <InvoiceCaseModal
                            fetchCases={props.fetchCases}
                            caseId={props.case.id}
                        />
                    ) : null}

                    <Button onClick={handlefullOpen} variant="outlined">
                        {" "}
                        Details{" "}
                    </Button>
                </CardActions>
            </Card>

            <Modal className={classes.modal} open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <form className="modal-form">
                        <textarea
                            placeholder="Add Case Information..."
                            onChange={handleChanges}
                            value={textState}
                            className="modal-text"
                            cols="50"
                            rows="15"
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.submitbutton}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </form>
                </div>
            </Modal>

            <CompleteCaseDialog
                open={completeopen}
                onClose={handlecompleteClose}
                caseId={props.case.id}
            />

            <CaseOverviewDialog
                case={props.case}
                open={fullopen}
                handleClose={handlefullClose}
                fetchCases={props.fetchCases}
            />
        </>
    );
};

/**
 * Export component
 */

export default MediatorCaseCard;
