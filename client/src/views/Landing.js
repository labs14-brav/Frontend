/**
 * Dependencies
 */

import React from "react";
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
 * Define view
 */



function getSteps() {
    return ['Create Account', 'Create Case', 'Search For Mediator','Mediate'];
  }
  


function getStepContent(step) {
    switch (step) {
      case 0:
        return `Mediation can be a hassle; our website makes mediation easier for everyone through encompasing the whole process online. Once an account has been created you will have access to your cases anywhere. Individuals also have the oportunity to sign up as mediators with their credentials and get approved.`;
      case 1:
        return `Once an account has been created you will have the option of creating a case. If the case was reffered by a court you will choose the court form and fill in all neccessary information. There is an also an option if your specific conflict in not court reffered `;
      case 2:
        return `After your case has been created you will search for a mediator you decide to handle your case. There are multiply criteria you can choose from, such as the mediators specialty and price. The chosen mediator will recieve all of your case information including external parties involved.`;
    case 3:
        return `After a mediator has accepted your request the mediation between all parties can begin. This includes the ability to upload important documents, add addendums to existing cases and make payments.`;
      default:
        return 'Unknown step';
    }
  }

  const images = [
    {
      label: '',
      imgPath:findMediator
    },
    {
      label: '',
      imgPath:caseActivity,
    },
    {
      label: '',
      imgPath:invoices,
    },
    {
      label: '',
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
                {/* <button> go to app store</button> */}

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
