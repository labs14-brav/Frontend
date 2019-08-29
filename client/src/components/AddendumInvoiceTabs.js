/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axioswithAuth from '../helpers/axioswithAuth';
import AddendumsList from './AddendumsList';
import UserInvoiceList from './UserInvoiceList';
import CaseDocumentsList from './CaseDocumentsList';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

/**
 * Import styles
 */

import './styles/AddendumInvoiceTabs.scss';

/**
 * Define component
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  submitbutton: {
    margin: theme.spacing(1),
    alignSelf: 'center',
  },
  modal: {
    margin: '0 auto',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  },
  tabs: {
    color: '#5C90C1',
  }
}));

/**
 * Define component
 */

export default function AddendumInvoiceTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [textState, setText] = useState('');
  const [addendums, setAddendums] = useState([]);

  const fetchAddendums = () => {
    axioswithAuth().get(`${process.env.REACT_APP_API_URL}/cases/${props.case.id}/addendums`)
      .then(res => {
        setAddendums(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  };


  function handleChange(event, newValue) {
    setValue(newValue);
  }

  //Adding addendums modal
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleChanges = e => {
    setText(e.target.value);
  }


  const submitPost = e => {
    e.preventDefault();
    let request = {
      description: textState
    };
    //need to update this with proper case ID coming in from props.
    axioswithAuth().post(`${process.env.REACT_APP_API_URL}/cases/${props.case.id}/addendums`, request)
      .then(res => {
        fetchAddendums();
      })
      .catch(error => {
      })
    //reset text state
    setText('');
    handleClose();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className={classes.tabs}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Addendums"  {...a11yProps(0)} />
          <Tab label="Invoices" {...a11yProps(1)} />
          <Tab label="Documents" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Button className={classes.secondarybutton} onClick={handleOpen} variant="outlined">
          Add Information
            </Button>
        <AddendumsList addendums={addendums} fetchAddendums={fetchAddendums} case={props.case} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserInvoiceList case={props.case} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CaseDocumentsList case={props.case} />
      </TabPanel>


      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleClose}>
        <div className={classes.paper}>
          <form onSubmit={submitPost} id='modal-form'>
            <textarea placeholder="Add Case Information..."
              onChange={handleChanges}
              value={textState}
              id="modal-text"
              cols='50'
              rows='15' />
            <Button variant="outlined" color="primary" className={classes.submitbutton} onClick={submitPost}>
              Submit
                </Button>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
