/**
 * Dependencies
 */

import React, { useState, useEffect, isValidElement } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CaseOverviewDialog from './modals/CaseOverviewDialog';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import AddendumsList from './AddendumsList'
import axioswithAuth from '../helpers/axioswithAuth';
/**
 * Import styles
 */

import './styles/UserCaseCard.scss';

/**
 * Import Font Awesome
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUsers, faSearch, faChalkboardTeacher,faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { green } from '@material-ui/core/colors';
import { element } from 'prop-types';

const useStyles = makeStyles(theme => ({
    primarybutton: {
        margin: theme.spacing(1),
        color: '#5C90C1',
        borderColor: '#5C90C1',
        "&:hover": {
            borderColor: "#517EA8",
            color: "#517EA8",
        },
        "&:active": {
            borderColor: "#476e91",
            color: "#517EA8",
        }
    },
    secondarybutton: {
        margin: theme.spacing(1),
        [theme.breakpoints.up('lg')]: {
            margin: theme.spacing(1),
        }
    },
    submitbutton: {
        margin: theme.spacing(1),
        justifyContent: 'center',
    },
    deletebutton: {
        margin: theme.spacing(1),
        color: '#E55557',
        borderColor: '#E55557',
    },
    modal: {
        margin: '0 auto',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    paper: {
        height: '101%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 2),
        outline: 'none',
        // display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1,2,2),
            width:'100%',
            height: '100%',
        },
      },
}))


/**
 *  Define component
 */

const UserCaseCard = (props) => {
    const [fullopen, setFullOpen] = useState(false);
    const classes = useStyles();
    const [invoices, setInvoices] = useState({mediator:{},invoice:[]});

    // Grab invoices from server
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`invoices/case/${props.case.id}`)
        setInvoices(res.data);
    }

    useEffect(() => {
        fetchInvoices();
    },[])

    /**
     * Dialog functions
     */
     const handlefullOpen = () => {
        setFullOpen(true);
    }
    const handlefullClose = () => {
        setFullOpen(false);
    }

   const pendingInvoices = invoices.invoice.filter(function(element){
       return element.paid_at === null
   })
   
 

    if(props.case.court_case === 1 || props.case.court_case === true || props.case.court_case === 'true') {

    return (
        <>
            <Grid
                item xs={11}
                sm={11}
                md={props.numCases === 1 ? 12 : 5}
                lg={props.numCases === 1 ? 12 : 5.5}>
                <Card className={classes.paper}> 

                {( pendingInvoices.length>0
        ) ?  [<FontAwesomeIcon icon={faMoneyCheckAlt} style={{color:"green",fontSize:"20px"}} />, " Pending-Invoice"] : null }
                    <h6 id="ribbon">Court Case</h6>
                    {/* Use <Typography variant="overline />" */}
                    <CardContent style={{width:'100%'}}>
                            <h6 className="case-label" style={{marginBottom:'8px', color: '#5C90C1', fontWeight: 'bold'}}>Dispute <FontAwesomeIcon icon={faHandshake} /> Category </h6>
                            <h5 id="case-dispute">{props.case.dispute_category}</h5>
                            <h6 className="case-label" style={{marginTop:'18px', fontWeight: 'bold'}} >Dispute <FontAwesomeIcon icon={faUsers} /> Participants</h6>
                            <h5 id="case-parties">{props.case.parties_involved.length > 0 ? props.case.parties_involved : 'No information provided'}</h5>
                    </CardContent>
                    <CardActions style={{display:"flex", flexWrap:"wrap", justifyContent:'center', alignItems:'flex-end'}}>
                        <Button variant="outlined" color="primary" className={classes.primarybutton}>
                            <Link style={{textDecoration:'none', color:'inherit'}}
                            to= {{
                                pathname: `/cases/${props.case.id}/mediator-search`,
                                state: {
                                    currentcase: props.case
                                }
                            }}
                            ><FontAwesomeIcon icon={faSearch} />  Find a Mediator</Link>
                        </Button>
                        <Button className={classes.secondarybutton} onClick={handlefullOpen} variant="outlined">
                        <FontAwesomeIcon icon={faChalkboardTeacher} style={{marginRight: '5px'}} />
                        View Details </Button>
                    </CardActions>
                </Card>




        <Dialog fullScreen open={fullopen} onClose={handlefullClose}>
            <Toolbar >
                <IconButton edge="end" onClick={handlefullClose}>
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <AddendumsList case={props.case}/>
        </Dialog>



            </Grid>


        <CaseOverviewDialog case={props.case} open={fullopen} handleClose={handlefullClose} fetchCases={props.fetchCases}/>


    </>
    )
    } else {
        return (
        <>
        <Grid
            item xs={11}
            sm={11}
            md={props.numCases === 1 ? 12 : 5}
            lg={props.numCases === 1 ? 12 : 5.5}>
            <Card className={classes.paper}> 

         
            {( pendingInvoices.length>0
        ) ?  [<FontAwesomeIcon icon={faMoneyCheckAlt} style={{color:"green",fontSize:"20px"}} />, " Pending-Invoice"] : null }

                <h6 id="ribbon" style={{width: '50%'}}>Non-Court Case</h6>
                <CardContent style={{width:'100%'}}>
                        <h6 className="case-label" style={{marginBottom:'8px', fontWeight: 'bold'}}>Dispute <FontAwesomeIcon icon={faHandshake} /> Category </h6>
                        <h5 id="case-dispute">{props.case.dispute_category}</h5>
                        <h6 className="case-label" style={{marginTop:'18px', fontWeight: 'bold'}}>Dispute <FontAwesomeIcon icon={faUsers} /> Participants</h6>
                        <h5 id="case-parties">{props.case.parties_involved.length > 0 ? props.case.parties_involved : 'No information provided'}</h5>
                        {props.case.case_completed_at ? <h6 className="case-label" style={{marginTop:'18px', fontWeight: 'bold'}}>Completed At</h6> : null}
                        {props.case.case_completed_at ? <h5 id="case-case_completed_at">{props.case.case_completed_at}</h5> : null}
                </CardContent>
                <CardActions style={{display:"flex", flexWrap:"wrap", justifyContent:'center', alignItems:'flex-end'}}>
                    {(props.case.case_completed_at || props.case.case_accepted_at) ? null :
                    <Button variant="outlined" color="primary" className={classes.primarybutton}>
                        <Link style={{textDecoration:'none', color:'inherit'}}
                            to= {{
                                pathname: `/cases/${props.case.id}/mediator-search`,
                                state: {
                                    currentcase: props.case
                                }
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />Find a Mediator
                        </Link>
                    </Button>}

                    <Button className={classes.secondarybutton} onClick={handlefullOpen} variant="outlined">
                    <FontAwesomeIcon icon={faChalkboardTeacher} style={{marginRight: '5px'}} />                        View Details </Button>
                </CardActions>
            </Card>
        </Grid>


    <CaseOverviewDialog case={props.case} open={fullopen} handleClose={handlefullClose} fetchCases={props.fetchCases}/>


</>
)
    }
}

/**
 *  Export component
 */

export default UserCaseCard;
