/**
 * Dependencies
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

/**
 *  Import styles
 */

import "./styles/CaseForm.scss";

/**
 * Global Component Styles
 */

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: "70px",
        paddingTop: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "grey",
        width: "95%"
    },
    cardContainer: {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    card: {
        maxWidth: "800px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "200px",
        margin: "10px",
        padding: "30px"
    },
    title: {
        color: "black"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        margin: "0",
        flexDirection: "column"
    },
    divider: {
        border: ".5px solid lightgrey",
        width: "100%",
        margin: "0px",
        marginTop: "10px"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        margin: "30px 0px",
        color: "grey",
        minHeight: "80px"
    },
    text: {
        margin: "20px 0px"
    },
    link: {
        textDecoration: "none"
    },
    button: {
        width: 200,
        color: "white",
        backgroundColor: "#5C90C1",
        "&:hover": {
            backgroundColor: "#517EA8"
        },
        "&:active": {
            backgroundColor: "#476e91"
        }
    }
}));

/**
 * Define view
 */

const CaseForm = props => {
    const classes = useStyles();

    const courtFormHandler = e => {
        e.preventDefault();
        props.history.push("/cases/new/court");
    };

    const outsideCourtFormHandler = e => {
        e.preventDefault();
        props.history.push("/cases/new/outside");
    };

    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Open a New Case</h3>
            <p>What type of case you are seeking mediation for?</p>
            <section className={classes.cardContainer}>
                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Court Referral</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p className={classes.text}>
                            Choose court referral if you seek mediation in a
                            case that has already been brought up to court.
                            After you open a case, you can select a mediator
                            from our list of certified mediators and request to
                            have a session.
                        </p>
                        <Button
                            className={classes.button}
                            onClick={courtFormHandler}
                            variant="contained"
                        >
                            Court Referral
                        </Button>
                    </div>
                </Card>
                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Non-Court Referral</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p className={classes.text}>
                            Choose non-court referral if you seek mediation in a
                            case that has not yet been brought up to court.
                            After you open a case, you can select a mediator
                            from our list of mediators and request to have a
                            session.
                        </p>
                        <Button
                            className={classes.button}
                            onClick={outsideCourtFormHandler}
                            variant="contained"
                        >
                            Non-Court Referral
                        </Button>
                    </div>
                </Card>
            </section>
        </div>
    );
};

/**
 * Export view
 */

export default CaseForm;
