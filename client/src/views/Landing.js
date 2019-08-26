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
        <div className="landing">
            <div className="landingNav">

            <div className="nav">
            <img
                    className="brav-logo"
                    src="https://www.brav.org/img/brav-logo.png"
                    alt="Brav Logo"
                />
                <div>
                

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

        
                </div>

                <div className="cover2">
                <h2>Online Mediation<br/>Anywhere In The World</h2>
                <img
                    className="cover"
                    src={require("../images/cover.svg")}
                    alt="Brav Logo"
                />

        <Link to="/auth" style={{textDecoration:"none"}} data-testid="signup-link">

                    <Button
                        style={{width:"300px"}}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        data-testid="signup-button">
                        signup
                    </Button>
                </Link>
                </div>
            <div className="how">
                <h3>How Bráv Works</h3>
                <div className="howContent">
                

                </div>
            </div>
        
            </div>
            </div>
        </>
    );
}

/**
 * Export view
 */

export default Landing;
