import React, { useState, useEffect } from 'react';
import AddendumsList from '../AddendumsList'
import AreYouSureDialog from './AreYouSureDialog';
import axioswithAuth from '../../helpers/axioswithAuth';
import AddendumInvoiceTabs from '../AddendumInvoiceTabs';

/**
 * Material UI imports
 */
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

import '../UserCaseCard.scss';


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

function CaseOverviewDialog(props) {
    const [sureOpen, setSureOpen] = useState(false);
    const classes = useStyles();

    //These are for the delete confirmation modal
    const handleSureOpen = () => {
        setSureOpen(true);
    }

    const handleSureClose = value => {
        setSureOpen(false);
        if (value === true) {
            handleDelete();
        }
    }
    //Delete handler upon clicking yes within delete confirmation modal
    function handleDelete() {
        axioswithAuth().delete(`${process.env.REACT_APP_API_URL}/cases/${props.case.id}`)
            .then(res => {
                console.log(res.data);
                props.fetchCases();
            })
            .catch(error => {
                console.error(error);
            })
    }
    
    return(
        <>

        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
            <Toolbar >
                <IconButton edge="end" onClick={props.handleClose}>
                    <CloseIcon /> 
                </IconButton>
                <Button className={classes.deletebutton} onClick={handleSureOpen} variant="outlined">
                    <DeleteIcon />
                </Button>
            </Toolbar>
            <div>
            <div className="caseDetails">
                <div className="general">
                    <h4>Type:</h4>
                    <p>{props.case.dispute_category}</p>
                    <h4>Parties Involved:</h4>
                    <p>{props.case.parties_involved}</p>
                    <h4><FontAwesomeIcon icon={faIdCardAlt} /> Parties' Contact Info:</h4>
                    <p>{props.case.parties_contact_info}</p>
                    <h4>Dispute Amount:</h4>
                    <p>{props.case.dispute_amount}</p>
                    <h4>{props.case.court_case ? "Court Jurisdiction:" : null}</h4>
                    <p>{props.case.court_case ? props.case.court_jurisdiction : null}</p>
                    <h4>{props.case.court_case ? "Course Number:" : null}</h4>
                    <p>{props.case.court_case ? props.case.course_number : null}</p>
                    <h4>{props.case.court_case ? "Filing Date:" : null}</h4>
                    <p>{props.case.court_case ? props.case.court_filing_date : null}</p>
                    
                </div>
                <div className="description"> 
                    <h4>Description</h4>  
                    <p>{props.case.description}</p>
                    <h4>{props.case.court_case ? "Case Notes:" : null}</h4>
                    <p>{props.case.court_case ? props.case.case_notes : null}
                    gjkfjfjkhfkfk  f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvjrhterterhterhtehrterthehrthterhterehrtethrehrtvvhthvtvhhtvhvhvhthtvhththrthrtehrthrthrthtrehrthrthrtehrehrtehrthtertvvhthtvhtvhrthreevhrvrvhvrtrthrthrterhrtrthertegjkfjfjkhfkfk f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvjrhterterhterhtehrterthehrthterhterehrtethrehrtvvhthvtvhhtvhvhvhthtvhththrthrtehrthrthrthtrehrthrthrtehrehrtehrthtertvvhthtvhtvhrthreevhrvrvhvrtrthrthrterhrtrthertegjkfjfjkhfkfk f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvjrhterterhterhtehrterthehrthterhterehrtethrehrtvvhthvtvhhtvhvhvhthtvhththrthrtehrthrthrthtrehrthrthrtehrehrtehrthtertvvhthtvhtvhrthreevhrvrvhvrtrthrthrterhrtrthertegjkfjfjkhfkfk f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvjrhterterhterhtehrterthehrthterhterehrtethrehrtvvhthvtvhhtvhvhvhthtvhththrthrtehrthrthrthtrehrthrthrtehrehrtehrthtertvvhthtvhtvhrthreevhrvrvhvrtrthrthrterhrtrthertegjkfjfjkhfkfk f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvjrhterterhterhtehrterthehrthterhterehrtethrehrtvvhthvtvhhtvhvhvhthtvhththrthrtehrthrthrthtrehrthrthrtehrehrtehrthtertvvhthtvhtvhrthreevhrvrvhvrtrthrthrterhrtrthertegjkfjfjkhfkfk f ffj f jfj kkfjkfvjfhjvfvjkvfjfjfjfjjkkvjjkjvhjvhvjkvjkvjvjkvjvkjvvjvvj</p>
                </div>     
            </div>
            <AddendumInvoiceTabs case={props.case}/>
            </div>
            
        </Dialog>

        <AreYouSureDialog open={sureOpen} onClose={handleSureClose}/>
    </>
    )
}



export default CaseOverviewDialog;