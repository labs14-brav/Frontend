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
        margin: theme.spacing(1),
        width: 100,
        color: 'white',
        backgroundColor: '#5C90C1',
        "&:hover": {
          backgroundColor: "#517EA8"
        },
        "&:active": {
          backgroundColor: "#476e91"
        }
      }
}));

function Landing(props) {
    const classes = useStyles();
    mixpanel.track("Visited landing page");

    return (
        <>
            <div className="landingNav">
                <Link to="/auth" style={{textDecoration:"none"}}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                    >
                        signup
                    </Button>
                </Link>

                <Link to="/auth" style={{textDecoration:"none"}}>
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
