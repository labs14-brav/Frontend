import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AcceptCaseModal from "./modals/AcceptCaseModal";
import DeclineCaseModal from "./modals/DeclineCaseModal";
import CompleteCaseModal from "./modals/CompleteCaseModal";

//styles
import "./UserCaseCard.scss";

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
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: "none",
        display: "flex",
        justifyContent: "center"
    }
}));

function getModalStyle() {}

const MediatorCaseCard = props => {
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
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

    /**
     These two functions are for the text input in the modal
     */

    const handleChanges = e => {
        setText(e.target.value);
    };

    //Need to update link in Mediator-Search link to the proper case ID when possible.
    return (
        <>
            <Card>
                <CardContent>
                    <h5> {props.case.description}</h5>
                    <h6>Type: {props.case.dispute_category} </h6>
                    <h6>Involves: {props.case.parties_involved} </h6>
                </CardContent>
                <CardActions>
                   
                    { props.case.case_declined_at === null && props.case.case_accepted_at === null && props.case.case_completed_at === null ?<AcceptCaseModal fetchCases={props.fetchCases} caseId={props.case.id} /> : null }

                    { props.case.case_declined_at === null && props.case.case_accepted_at === null && props.case.case_completed_at === null ?<DeclineCaseModal fetchCases={props.fetchCases} caseId={props.case.id} /> : null}

                    { props.case.case_accepted_at && props.case.case_declined_at === null && props.case.case_completed_at === null ?<CompleteCaseModal fetchCases={props.fetchCases} caseId={props.case.id} /> : null }

                    <Button onClick={handleOpen}>Case Details</Button>
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
        </>
    );
};

export default MediatorCaseCard;
