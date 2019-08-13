/**
 * Dependencies
 */

import React from "react";
import { DeactivateAccountButton } from "../components/index";
import { Link } from "react-router-dom";
import { makeStyles, Card } from "@material-ui/core";
import { BecomeMediatorLink } from "./styles/index";

/**
 * Define view
 */

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "70px",
        paddingTop: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        color: "grey"
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
        minHeight: "150px",
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
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "30px",
        flexDirection: "column",
        height: "120px"
    }
}));

/**
 * Define view
 */

function Settings() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Site settings</h3>
            <p>General user settings</p>
            <section className={classes.cardContainer}>
                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Become a Brav one!</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p>
                            Become a Brav one! Click the button below to apply!
                        </p>
                        <Link to="/users/mediator-registration">
                            <BecomeMediatorLink>
                                Become a Mediator
                            </BecomeMediatorLink>
                        </Link>
                    </div>
                </Card>
                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Deactivate account</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p>
                            Click below to deactivate account. Action is
                            irreversible.
                        </p>
                        <DeactivateAccountButton />
                    </div>
                </Card>
            </section>
        </div>
    );
}

/**
 * Export view
 */

export default Settings;
