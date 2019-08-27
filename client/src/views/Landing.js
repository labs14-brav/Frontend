/**
 * Dependencies
 */

import React from "react";
// import SwipeableViews from 'react-swipeable-views';
import { Link } from "react-router-dom";
import { Button, makeStyles, useTheme} from "@material-ui/core";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';
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

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

/**
 * Define view
 */

function getSteps() {
    return ['Create Account', 'Create Case', 'Search For Mediator'];
  }
  


function getStepContent(step) {
    switch (step) {
      case 0:
        return `text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
      case 1:
        return ` text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      default:
        return 'Unknown step';
    }
  }

  const images = [
    {
      label: 'San Francisco – Oakland Bay Bridge, United States',
      imgPath:findMediator
    },
    {
      label: 'Bird',
      imgPath:caseActivity,
    },
    {
      label: 'Bali, Indonesia',
      imgPath:invoices,
    },
    {
      label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
      imgPath:settingPage,
    },
   
  ];


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
  
   

    function handleStepChange(step) {
        setActiveStep(step);
      }
    




    return (
        <>
        <div className="landing">


            <div className="landingNav">

            <div className="nav"  id="navbar">
            <img
                id="logo"
                    className="brav-logo"
                    src="https://www.brav.org/img/brav-logo.png"
                    alt="Brav Logo"
            />
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


                <div className="cover2">
                <h2>Online Mediation<br/>Anywhere In The World</h2>
                <img
                    className="cover"
                    src={require("../images/process.svg")}
                    alt="Brav Logo"
                />


       
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
                </div>
                 
            </div>


            <div className="featuresSection">
            <h3>Features</h3>
            <div className="featuresBox">

            <section className="features">
    
                        <Card className={classes.card}>
                    <CardActionArea>
                    <AccountBalanceIcon className="icon"/>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
            </section>

            <section className="features">
                        <Card className={classes.card}>
                    <CardActionArea >
                    <FileCopyIcon className="icon" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </section>

                        <section className="features">
                        <Card className={classes.card}>
                    <CardActionArea>
                    <SearchIcon className="icon" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </section>

                        <section className="features">
                        <Card className={classes.card}>
                    <CardActionArea>
                    <PaymentIcon  className="icon" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </section>

                        <section className="features">
                        <Card className={classes.card}>
                    <CardActionArea>
                    <LanguageIcon  className="icon" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </section>



                        <section className="features">
                        <Card className={classes.card}>
                    <CardActionArea>
                    <EmailIcon  className="icon" />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                        </CardActionArea>
                        </Card>
                        </section>
                        
                       
                        </div>
                    </div>

                        <div className="appStore">
                                <h3>Check out our App</h3>
                                <div className="smartphone">

                                    <div className="content">


                                    <div className={classes.root}>
                                        <img
                                            className={classes.img}
                                            src={images[activeStep].imgPath}
                                            alt={images[activeStep].imgPath}
                                        />
                                       
                                        </div>


                                    </div>


                                </div>
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
                                <button> go to app store</button>



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
