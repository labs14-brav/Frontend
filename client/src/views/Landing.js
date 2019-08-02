/**
 * Dependencies
 */

import React from "react";
import { NavBar, MediatorCasesShow } from "../components/index";
import { mixpanel } from "../helpers/index";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

/**
 * Define view
 */

const useStyles = makeStyles(theme => ({
    button: {
        margin: "5px"
    }
}));

function Landing(props) {
    const classes = useStyles();
    mixpanel.track("Visited landing page");

    return (
        <>
            <div className="landingNav">
                <Link to="/users/login" style={{textDecoration:"none"}}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                    >
                        signup
                    </Button>
                </Link>

                <Link to="/users/login" style={{textDecoration:"none"}}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                    >
                        login
                    </Button>
                </Link>
            </div>
            <div className="landing">
                {/* <NavBar login={''} /> */}
                <img
                    className="brav-logo"
                    src="https://www.brav.org/img/brav-logo.png"
                />
            </div>
        </>
    );
}

/**
 * Export view
 */

export default Landing;
