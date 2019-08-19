/**
 * Dependencies
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";

/**
 * Define view
 */

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: 100,
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

function Landing() {
    const classes = useStyles();

    return (
        <>
            <div className="landingNav">
                <Link to="/auth" style={{textDecoration:"none"}} data-testid="signup-link">

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        data-testid="signup-button">
                        signup
                    </Button>
                </Link>

                <Link to="/auth" style={{textDecoration:"none"}} data-testid="login-link">

                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        data-testid="login-button">
                        login
                    </Button>
                </Link>
            </div>
            <div className="landing">
                <img
                    className="brav-logo"
                    src="https://www.brav.org/img/brav-logo.png"
                    alt="Brav Logo"
                />
            </div>
        </>
    );
}

/**
 * Export view
 */

export default Landing;
