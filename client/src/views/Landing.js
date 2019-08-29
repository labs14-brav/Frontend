/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, useTheme} from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SearchIcon from '@material-ui/icons/Search';
import PaymentIcon from '@material-ui/icons/Payment';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import LanguageIcon from '@material-ui/icons/Language';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import EmailIcon from '@material-ui/icons/Email';
import findMediator from '../images/findMediator.jpg';
import caseActivity from '../images/caseActivity.jpg';
import invoices from '../images/invoices.jpg';
import settingPage from '../images/SettingPage.jpg';

/**
 * Define Data for Mapping
 */

//  for stepper
function getSteps() {
    return ['Create Account', 'Create Case', 'Search For Mediator','Mediate'];
  }


//   for stepper
function getStepContent(step) {
    switch (step) {

      case 0:
        return `Once you create an account by clicking the sign up button below, you will have access to create a case and find a mediator all within our application.
        Qualified individuals will also have the opportunity to sign up as mediators using their credentials.`;
      case 1:
        return `Once your account has been created you will have the option of creating a case.`;
      case 2:
        return `After your case has been created you will search for a mediator to handle it. Use our search tool to find a mediator that suits your needs.`;
    case 3:
        return `After a mediator has accepted your case, the mediation process may begin.`;
      default:
        return 'Unknown step';
    }
  }

//   for phone carousel
  const images = [
    {
      imgPath:findMediator
    },
    {
      imgPath:caseActivity,
    },
    {
      imgPath:invoices,
    },
    {
      imgPath:settingPage,
    },

  ];

//   for info cards
  const cards= [
    {
        icon:AccountBalanceIcon,
        label:"Cases",
        text:"Create a case on our platform, whether it be court-related or not. "
    },
    {
        icon:FileCopyIcon,
        label:"Documents",
        text:"Share information with your mediator using our file upload and viewing system."
    },
    {
        icon:SearchIcon,
        label:"Mediators",
        text:"Filter our qualified mediators based on criteria such as hourly rate, specialty, language, or experience in the field."
    },
    {
        icon:PaymentIcon,
        label:"Payment",
        text:"Facilitate payments through our secure platform."
    },
    {
        icon:LanguageIcon,
        label:"Accessibility",
        text:"Take your cases on-the-go through our mobile application, currently available on Android."
    },
    {
        icon:EmailIcon,
        label:"Notifications",
        text:"Never miss an update to your case. Brāv sends notifications to your email directly."
    }

  ]


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
            backgroundColor: "white",
            color:"#598EBF",
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
      card: {
        maxWidth: 300,
      },
      media: {
        height: 140,

      },
      header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
      },
      img: {
        height: 350,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
      }
}));



function Landing() {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const maxSteps = images.length;

    function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
    <>
        <div className="landing">

{/* navigation */}

            <div className="landingNav">
                <div className="nav"  id="navbar">
                    <img
                        id="logo"
                        className="brav-logo"
                        src="https://www.brav.org/img/brav-logo.png"
                        alt="Brāv Logo"
                    />
                <div>

                <Link to="/auth" style={{textDecoration:"none"}} data-testid="signup-link">
                    <Button
                    id="navSignUp"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    data-testid="signup-button">
                    signup
                    </Button>
                </Link>
                <Link to="/auth" style={{textDecoration:"none"}} data-testid="login-link">
                    <Button
                    id="navLogin"
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

            <img
                className="cover"
                src={require("../images/process.svg")}
                alt="cover"
            />

        </div>


     {/* stepper */}

        <div className="how">
        <h3>How Brāv Works</h3>
        <div className="alternativeMediation">
             <h6>Mediation is a great alternative to the formal judicial system. Our platform makes mediation even easier for users to solve conflict through the use of our online tools.</h6>
        </div>
            <div className="howContent">

            <div className="stepper">
                <Stepper  activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (

                    <Step id="step" key={label}>

                    <StepLabel  >{label}</StepLabel>
                <StepContent >
                    <Typography>{getStepContent(index)}</Typography>
                    <div className={classes.actionsContainer}>
                    <div>
                    {activeStep === 0 ? null : <Button
                        style={{backgroundColor:"#598EBF",color:"white"}}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                        >
                            Back
                        </Button>}

                    {activeStep === steps.length - 1 ? null : <Button
                    style={{backgroundColor:"#598EBF"}}
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

         </div>

         <Link to="/auth" style={{textDecoration:"none"}}>
                    <Button
                        id="sign-up"
                        style={{backgroundColor:"#598EBF",color:"white",width:"300px"}}
                        className={classes.button}
                        variant="contained"
                        color="primary">
                        signup
                    </Button>
                </Link>
        </div>


{/* features sections */}

        <div className="featuresSection">
            <div className="featuresBox">

                    {cards.map(element=>{
                    return(
                        <section className="features">
                            <Card className={classes.card}>
                                <CardActionArea>
                                    {/* element.icon comes from the cards array. Is icons */}
                                <element.icon className="icon" style={{color:"#598EBF"}}/>
                                <CardContent style={{height:"160px"}}>
                                <Typography gutterBottom variant="h5" component="h2">
                                               {element.label}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                                {element.text}
                                </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </section>
                    )
                    })
                    }

            </div>
        </div>


{/* mobile app mock */}

        <div className="appStore" style={{textAlign:"center"}}>
            <h3>Check Out Our App</h3>
            <div className="smartphone">

                <div className="content">
                    <div className={classes.root}>
                        <img
                            className={classes.img}
                            src={images[activeStep].imgPath}
                            alt={images[activeStep].imgPath}
                        />
                        <MobileStepper
                                id="mobilebuttons"
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                            }
                            backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                    />

                </div>
                <a href="#">
                    <img
                    // there is no link yet for the appstore; remove comment when inserted
                        className="playButton"
                        src={require("../images/google-play-badge.png")}
                        alt="googlePlayStore"
                    />
                </a>
            </div>

            </div>
        </div>
    </div>

    <footer className="footer" style={{textAlign:"center"}}>
        <p>©2019 All Rights Reserved. Brāv.</p>
    </footer>
        </div>
    </>
    );
}

/**
 * Export view
 */

export default Landing;
