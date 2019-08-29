/**
 * Dependencies
 */

import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MediatorCasesShowStyle from "./styles/MediatorCasesShowStyle";
import MediatorPendingCaseList from "../components/MediatorPendingCaseList";
import MediatorActiveCaseList from "../components/MediatorActiveCaseList";
import MediatorCompletedCaseList from "../components/MediatorCompletedCaseList";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConnectBankAccountLink } from "./styles/index";

/**
 * Import styles
 */

import './styles/MediatorCasesShow.scss';

/**
 * Define styles
 */

const NavTabs = withStyles({
    root: {
        borderBottom: "1px solid #e8e8e8"
    },
    indicator: {
        backgroundColor: "#5C90C1"
    }
})(Tabs);

const NavTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        minWidth: 70,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(0),
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
            color: "#5C90C1",
            opacity: 1
        },
        "&$selected": {
            color: "#5C90C1",
            fontWeight: theme.typography.fontWeightMedium
        },
        "&:focus": {
            color: "#5C90C1"
        }
    },
    selected: {}
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > div": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "#635ee7"
        }
    }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

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
        textDecoration: "none"
    }
}));

const StyledTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        color: "#fff",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        "&:focus": {
            opacity: 1
        }
    }
}))(props => <Tab disableRipple {...props} />);

/**
 *  Define view
 */

function MediatorCasesShow() {
    const [selectedTab, setSelectedTab] = useState("pending");
    const [value, setValue] = useState(0);
    const classes = useStyles();

    function handleChange(event, newValue) {
        setValue(newValue);
        if (newValue === 0) setSelectedTab("pending");
        if (newValue === 1) setSelectedTab("active");
        if (newValue === 2) setSelectedTab("completed");
    }

    const is_stripe_connected = localStorage.getItem("is_stripe_connected");

    if (is_stripe_connected === true ||
        is_stripe_connected === "true" ||
        is_stripe_connected === 1 ||
        is_stripe_connected === "1"

    ) {
        return (
            <MediatorCasesShowStyle>
                <NavTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="mediator-cases-navtabs"
                    centered
                >
                    <NavTab label="Pending" />
                    <NavTab label="Active" />
                    <NavTab label="Completed" />
                </NavTabs>
                {selectedTab === "pending" ? (
                    <div id="selected-list">
                        <MediatorPendingCaseList />
                    </div>
                ) : null}
                {selectedTab === "active" ? (
                    <div id="selected-list">
                        <MediatorActiveCaseList />
                    </div>
                ) : null}
                {selectedTab === "completed" ? (
                    <div id="selected-list">
                        <MediatorCompletedCaseList />
                    </div>
                ) : null}
            </MediatorCasesShowStyle>
        );
    } else {
        return (
            <div className={classes.container}>
                <h3 className={classes.title}>Mediator Payment Registration</h3>
                <section className={classes.cardContainer}>
                    <Card className={classes.card}>
                        <div className={classes.cardTitle}>
                            <strong>Activate your Stripe Account</strong>

                            <div className={classes.divider}> </div>
                        </div>
                        <div className={classes.cardContent}>
                            <p className={classes.text}>
                                In order to access our services, an account with
                                Stripe Services must be created. Stripe is the
                                best platform for running an internet business
                                and handles billions of dollars every year for
                                forward-thinking businesses like our mediation
                                platform. If you you are eager to expand your
                                business, please click the button below to register with Stripe in order to recieve payments.
                                 If you are still unsure and would like more information regarding Stripe, click the link below.
                                <br />
                            </p>

                          <a style={{ textDecoration:"none" }}
                              href={`https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_ABPUiwwNjwxtQ0OypoG43e6Pw4Z32vOp&redirect_uri=${process.env.REACT_APP_URL}/stripe-callback`}>
                            <ConnectBankAccountLink>

                            <FontAwesomeIcon icon={faCreditCard} style={{paddingRight:"10px",fontSize:"30px"}}/>
                                Connect Bank Account
                            </ConnectBankAccountLink>
                          </a>
                        </div>
                        <a
                                    style={{ textDecoration: "none", alignSelf: 'flex-start'}}
                                    href="https://stripe.com/about"
                                    target="_blank"
                                >
                                    Stripe Information
                            </a>
                    </Card>
                </section>
            </div>
        );
    }
}

/**
 *  Export view
 */

export default MediatorCasesShow;
