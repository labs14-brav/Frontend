/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AddendumsList from './AddendumsList'
import AreYouSureDialog from './modals/AreYouSureDialog';
import CaseOverviewDialog from './modals/CaseOverviewDialog';
import axioswithAuth from '../helpers/axioswithAuth';

/**
 * Material UI imports
 */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';


/**
 * Import styles
 */

import './UserCaseCard.scss';

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
        height: '400px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        display: "flex",
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
    console.log(props.case);
    const [fullopen, setFullOpen] = useState(false);
    const classes = useStyles();

    /**
     * Dialog functions
     */
     const handlefullOpen = () => {
        setFullOpen(true);
    }
    const handlefullClose = () => {
        setFullOpen(false);
    }
    if(props.case.court_case === 1) {
    return (
        <>
            <Grid 
                item xs={11} 
                sm={11} 
                md={props.numCases === 1 ? 12 : 5} 
                lg={props.numCases === 1 ? 12 : 5.5}>
                <Card className={classes.paper}> 
                    <CardContent style={{width:'100%'}}>
                        <h6 id="case-label">Type</h6>
                        <h5 id="case-dispute">{props.case.dispute_category}</h5>
                        <h6 id="case-label">Involves</h6>
                        <h5 id="case-parties">{props.case.parties_involved.length > 0 ? props.case.parties_involved : 'No information provided'}</h5>
                        {/* <h6 id="case-label">Description</h6>
                        <h5 id="case-description">{props.case.description.length > 0 ? props.case.description : 'No information provided'}</h5> */}
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
                            > Find a Mediator </Link>
                        </Button>
                        <Button className={classes.secondarybutton} onClick={handlefullOpen} variant="outlined">
                            View Details
                        </Button>
                    </CardActions>
                </Card>
            </Grid>


        <CaseOverviewDialog case={props.case} open={fullopen} handleClose={handlefullClose} />
        
        
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
                        <CardContent style={{width:'100%'}}>
                            <h6 id="case-label">Type</h6>
                            <h5 id="case-dispute">{props.case.dispute_category}</h5>
                            <h6 id="case-label">Involves</h6>
                            <h5 id="case-parties">{props.case.parties_involved.length > 0 ? props.case.parties_involved : 'No information provided'}</h5>
                            {/* <h6 id="case-label">Description</h6>
                            <h5 id="case-description">{props.case.description.length > 0 ? props.case.description : 'No information provided'}</h5> */}
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
                                > Find a Mediator </Link>
                            </Button>
                            <Button className={classes.secondarybutton} onClick={handlefullOpen} variant="outlined">
                                View Detail$
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
    
    
            <CaseOverviewDialog case={props.case} open={fullopen} handleClose={handlefullClose} />
            
            
        </>
        )
    }           
}

/**
 *  Export component
 */

export default UserCaseCard;