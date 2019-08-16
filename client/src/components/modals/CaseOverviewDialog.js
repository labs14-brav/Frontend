import React, { useState, useEffect } from 'react';
import AddendumsList from '../AddendumsList'
import AreYouSureDialog from './AreYouSureDialog';
import axioswithAuth from '../../helpers/axioswithAuth';
import AddendumInvoiceTabs from '../AddendumInvoiceTabs';
import moment from "moment";

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
import { faIdCardAlt,faUserFriends,faClipboard,faBookOpen,faWallet,faLandmark,faFolder,faBalanceScale,faCalendarDay } from '@fortawesome/free-solid-svg-icons';

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
        alignSelf:'flexEnd',
    },
    modal: {
        margin: '0 auto',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
        }
    },
    card: {
        maxWidth: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: "200px",
        margin: "0 auto",
        padding: "30px",
    },
    divider: {
        border: ".5px solid lightgrey",
        width: "100%",
        margin: "0px",
        marginTop: "10px"
    },
    cardTitle: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        margin: "0",
        flexDirection: "column"
    },
    listItem: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    },
    listItemGrey: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        backgroundColor: "lightgrey"
    },
    cardContainer: {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        margin: "30px 0px",
        color: "grey",
        minHeight: "80px"
    },
    tags: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tag: {
        backgroundColor: "#5C90C1",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 10px",
        fontSize: "14px",
        fontWeight: "normal"
    },
    timeStamp: {
        fontSize: "14px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "5px 10px"
    },
    description: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    } 
}))

function CaseOverviewDialog(props) {
    const [sureOpen, setSureOpen] = useState(false);
    const classes = useStyles();
    const timeStamp = moment(props.case.created_at, "YYYY-MM-DD HH:mm:ss").format(
        "MMMM Do YYYY, h:mma"
      );

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
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            })
    }

    useEffect(() => {
        console.log("case object", props.case);
          console.log(timeStamp);
    });
    
    return(
        <>

        <Dialog fullScreen open={props.open} onClose={props.handleClose}>
            <Toolbar >
               
                <Button id="trashButton" className={classes.deletebutton} onClick={handleSureOpen} variant="outlined">
                    <DeleteIcon />
                </Button>
                <IconButton id="exitButton" edge="end" onClick={props.handleClose}>
                    <CloseIcon /> 
                </IconButton>
          
            </Toolbar>
            <div>
            <Card className={classes.card}>
                
                <div className={classes.cardTitle}>
                    <div className={classes.tags}>
                        <p className={classes.timeStamp}>{timeStamp}</p>
                        <strong className={classes.tag}>{props.case.dispute_category}</strong>
                    </div>
                    <div className={classes.divider}> </div>
                </div>
                <div className={classes.cardContent}>
                {/* <div className={classes.listItem}>
                    <h5><FontAwesomeIcon icon={faFolder} /> Type</h5>
                    <p>{props.case.dispute_category}</p>
                </div> */}
                <div className={classes.listItem}>
                {/* <FontAwesomeIcon icon={faUserFriends} />  */}
                    <strong>Parties Involved</strong>
                    <p>{props.case.parties_involved}</p>
                </div>
                <div className={classes.listItemGrey}>
                    {/* <FontAwesomeIcon icon={faIdCardAlt} />  */}
                    <strong>Parties' Contact Info</strong>
                    <p>{props.case.parties_contact_info}</p>
                </div>
                <div className={classes.listItem}>
                    {/* <FontAwesomeIcon icon={faWallet} /> */}
                    <strong> Dispute Amount</strong>
                    <p>{props.case.dispute_amount}</p>
                </div>
                <div className={classes.listItem}>
                    <h5>{props.case.court_case ? <FontAwesomeIcon icon={faLandmark} />:null}{props.case.court_case ? " Court Jurisdiction" : null}</h5>
                    <p>{props.case.court_case ? props.case.court_jurisdiction : null}</p>
                </div>
                <div className={classes.listItem}>
                    <h5>{props.case.court_case ? <FontAwesomeIcon icon={faBalanceScale} />:null}{props.case.court_case ? " Court Number" : null}</h5>
                    <p>{props.case.court_case ? props.case.court_number : null}</p>
                </div>
                <div className={classes.listItem}>
                    <h5>{props.case.court_case ? <FontAwesomeIcon icon={faCalendarDay} />:null}{props.case.court_case ? " Filing Date" : null}</h5>
                    <p>{props.case.court_case ? props.case.court_filing_date : null}</p>
                </div>
                <div className={classes.description}>
                    {/* <FontAwesomeIcon icon={faBookOpen} /> */}
                    <h5> Description</h5> 
                    <p>{props.case.description}</p>
                </div>
                <h5>{props.case.court_case ? <FontAwesomeIcon icon={faClipboard} />:null}{props.case.court_case ?   " Case Notes" : null}</h5>
                <p>{props.case.court_case ? props.case.case_notes : null}</p> 
                </div>
                </Card>
                <AddendumInvoiceTabs case={props.case}/>
            </div>
        </Dialog>
        <AreYouSureDialog open={sureOpen} onClose={handleSureClose}/>
    </>
    )
}



export default CaseOverviewDialog;