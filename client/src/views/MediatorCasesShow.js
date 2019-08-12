/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./MediatorCasesShow.scss";

/**
 * Material UI Imports
 */
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Card, Container } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { MediatorCasesShowStyle } from "./styles/index";
import {
    NavBar,
    SideNavBlock,
    MediatorPendingCaseList,
    MediatorActiveCaseList,
    MediatorCompletedCaseList,
    StripeButton
} from "../components";

/**
 * Define styles
 */

const NavTabs = withStyles({
    root: {
        borderBottom: "1px solid #e8e8e8"
    },
    indicator: {
        backgroundColor: "#1890ff"
    }
})(Tabs);

const NavTab = withStyles(theme => ({
    root: {
        textTransform: "none",
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
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
            color: "#40a9ff",
            opacity: 1
        },
        "&$selected": {
            color: "#1890ff",
            fontWeight: theme.typography.fontWeightMedium
        },
        "&:focus": {
            color: "#40a9ff"
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
 *  Export view
 */

export default function MediatorCasesShow() {
    const [selectedTab, setSelectedTab] = useState("pending");
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
        if (newValue === 0) setSelectedTab("pending");
        if (newValue === 1) setSelectedTab("active");
        if (newValue === 2) setSelectedTab("completed");
    }

    if (false) {
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
            <MediatorCasesShowStyle>
                <a
                    style={{ marginTop: "200px" }}
                    href="https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_FapfMHhGMRX8cqibiDppj97yzbPNKByE&redirect_uri=http://localhost:3000/stripe-callback"
                >
                    Connect Bank Account
                </a>
            </MediatorCasesShowStyle>
        );
    }
}
