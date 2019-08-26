/**
 * Dependencies
 */

import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

/**
 * Define view
 */

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  }
  


function getStepContent(step) {
    switch (step) {
      case 0:
        return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
      case 1:
        return 'An ad group contains one or more ads which target a shared set of keywords.';
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

  


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
    },
    root: {
        minWidth: '100%',
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
}));

function Landing() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  
    function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }
  
    function handleReset() {
      setActiveStep(0);
    }

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
                        id="sign-up"
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




                <div className="stepper">
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        
                    <Step key={label}>
        
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                        <div className={classes.actionsContainer}>
                            <div>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            >
                                Back
                            </Button>
                            
                            {activeStep === steps.length - 1 ? null : <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                            > 
                            next
                            </Button> }
                               
                          

                            </div>
                        </div>
                       
                        </StepContent>
                    
                    
                    </Step>
        
                    ))}
                    
                </Stepper>
             
            </div>
                
                <section className="features">
                    <h3>Features</h3>
                    <div>



                    </div>


                </section>






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
