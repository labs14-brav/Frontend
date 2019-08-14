import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axioswithAuth from '../helpers/axioswithAuth';
import AddendumsList from './AddendumsList';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
}));

export default function AddendumInvoiceTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(false);
  const [textState, setText] = useState('');

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
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })
            //reset text state
        setText('');
        handleClose();
    }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Item One"  {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Button className={classes.secondarybutton} onClick={handleOpen} variant="outlined">
                                Add Information
            </Button>
        <AddendumsList case={props.case}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>


      <Dialog
        className={classes.modal}
        open={open}
        onClose={handleClose}>
            <div className={classes.paper}>
                <form onSubmit={submitPost} className='modal-form'>
                    <textarea placeholder="Add Case Information..." 
                        onChange={handleChanges} 
                        value={textState}
                        className="modal-text" 
                        cols='50'
                        rows='15'/>
                    <Button variant="outlined" color="primary" className={classes.submitbutton} onClick={submitPost}>
                         Submit
                    </Button>
                </form>
            </div>
        </Dialog>
    </div>
  );
}
