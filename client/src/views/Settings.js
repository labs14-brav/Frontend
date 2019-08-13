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
    }
}));

/**
 * Define view
 */

function Settings() {
    const classes = useStyles();
    const userType = localStorage.getItem("type");
    console.log(userType);

    return (
        <div className={classes.container}>
            <h3 className={classes.title}>Site settings</h3>
            <p>General user settings</p>
            <section className={classes.cardContainer}>
                {userType === "mediator" ? null : (
                    <Card className={classes.card}>
                        <div className={classes.cardTitle}>
                            <strong>Become mediator</strong>
                            <div className={classes.divider}> </div>
                        </div>
                        <div className={classes.cardContent}>
                            <p className={classes.text}>
                                Are you a certified mediator? Join the Brav
                                platform to offer your services! Upon approval
                                you will be able to receive mediation requests
                                and get payed right from the app. Click below to
                                submit your application!
                            </p>
                            <Link
                                className={classes.link}
                                to="/users/mediator-registration"
                            >
                                <BecomeMediatorLink>
                                    Become a Mediator
                                </BecomeMediatorLink>
                            </Link>
                        </div>
                    </Card>
                )}

                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Deactivate account</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p className={classes.text}>
                            If you deactivate your account you will lose access
                            to our services. A record of your cases will be
                            stored as stated in the agreement. Click below if
                            you are sure to continue.
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
