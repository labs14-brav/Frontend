/**
 * Dependencies
 */

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Card } from "@material-ui/core";

/**
 * Define view
 */

const useStyles = makeStyles(() => ({
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
        color: "#FFF",
        backgroundColor: "#5C90C1",
        boxShadow:
            "0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)",
        padding: "2px 6px",
        lineHeight: "1.75",
        fontWeight: 500,
        borderRadius: "4px",
        width: "180px",
        margin: "0 auto",
        textAlign: "center",
        height: "40px",
        "&:hover": {
            backgroundColor: "#507ca6",
            color: "green"
        },
        "&:active": {
            color: "white",
            boxShadow:
                "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)"
        },
        textDecoration: "none"
    },
    image: {
        height: "350px",
        width: "auto"
    }
}));

/**
 * Define view
 */

function NoMatch() {
    const classes = useStyles();
    const userType = localStorage.getItem("type");

    return (
        <div className={classes.container}>
            <section className={classes.cardContainer}>
                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <h1 data-testid="alert-pagenotfound">404 Page Not Found</h1>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <img
                            className={classes.image}
                            src={require("../images/not_found.jpg")}
                        />
                        <p className={classes.text}>
                            You are getting this message beacause the page you
                            requested does not exist. Click the button below to
                            get redirected to the home page.
                        </p>
                        <Link
                            style={{ color: "white" }}
                            className={classes.link}
                            to={localStorage.getItem("type") === "mediator" ? "/mediator-cases" : "/cases"}
                            data-testid="link-returntomainpage"
                        >
                            <p
                                style={{
                                    color: "white",
                                    textJustify: "center",
                                    marginTop: "4px"
                                }}
                            >
                                TAKE ME HOME
                            </p>
                        </Link>
                    </div>
                </Card>
            </section>
        </div>
    );
}

/**
 * Export view
 */

export default NoMatch;
