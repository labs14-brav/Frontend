/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import SimpleDialog from './modals/SimpleDialog.js';


/**
 * Material-UI imports
 */

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

/**
 * Global Component Styles
 */

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 400,
  },
  button: {
    margin: theme.spacing(1),
    width: 400,
    height: 60,
    color: 'white',
    backgroundColor: '#5C90C1',
    "&:hover": {
      backgroundColor: "#517EA8"
    },
    "&:active": {
      backgroundColor: "#476e91"
    }
  },
}));

/**
 * Define component
 */

const CourtForm = (props) => {
  const classes = useStyles();
  const [form, setValues] = useState({
    "court_case": true,
    "parties_involved": "",
    "parties_contact_info": "",
    "description": "",
    "dispute_category": "",
    "dispute_amount":null,
    "court_jurisdiction": "",
    "court_number": "",
    "court_filing_date": "",
    "case_notes": ""
  });
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  /**
   * Dialog Methods
   */

   function handleOpen() {
     setOpen(true);
   }
   function handleErrorOpen() {
     setErrorOpen(true);
   }
   function handleClose() {
     setOpen(false);
   }
   function handleErrorClose() {
     setErrorOpen(false);
   }
   
  /**
   *  Form Methods
  */
  const handleChange = name => event => {
    setValues({ ...form, [name]: event.target.value });
  };
      
  const onSubmitHandler = e => {
    e.preventDefault();
    axioswithAuth().post(`/cases`, form)
    .then(res => {
      console.log(res.data);
      handleOpen();
    })
    .catch(err => {
      console.error(err.response)
      handleErrorOpen();
    })
   
  }


  return (
    <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px 30px"}}>
      <h1 style={{textAlign:"center"}}>Court Case Form</h1>

      <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>               
        <TextField
          className={classes.textField}
          select
          label="Case Type"
          value={form.dispute_category}
          helperText="required"
          onChange={handleChange("dispute_category")}
          required
          SelectProps={{
            MenuProps: {
            className: classes.menu,
            }
          }}
          >
            <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
            <MenuItem value="Eldercare">Eldercare</MenuItem>
            <MenuItem value="Commercial">Commercial</MenuItem>
            <MenuItem value="Domestic">Domestic</MenuItem>
            <MenuItem value="Workplace">Workplace</MenuItem>
            <MenuItem value="Penal">Penal</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
        </TextField>

        <TextField
          className={classes.textField}
          label="Dispute Participants"
          type="email"
          name="parties_involved"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={handleChange("parties_involved")}
          value={form.parties_involved}  
          />

        <TextField 
          className={classes.textField}
          label="Participant Contact Info"
          name="parties_contact_info"
          value={form.parties_contact_info}
          onChange={handleChange("parties_contact_info")}
          margin="normal"
          variant="outlined"/>

        <TextField 
          className={classes.textField}
          label="Dispute Amount"
          name="dispute_amount"
          helperText="if applicable"
          value={form.dispute_amount}
          type="number"
          onChange={handleChange("dispute_amount")}
          margin="normal"
          variant="outlined"/>

        <TextField
          className={classes.textField}
          name="court_jurisdiction"
          label="Jurisdiction"
          helperText="or Court ID"
          value={form.court_jurisdiction}
          onChange={handleChange("court_jurisdiction")}
          margin="normal"
          variant="outlined"
          />

        <TextField
          className={classes.textField}
          name="court_number"
          label="Case Number"
          value={form.court_number}
          onChange={handleChange("court_number")}
          margin="normal"
          variant="outlined"
          />

        <TextField
          className={classes.textField}
          name="court_filing_date"
          label="Case Filing Date"
          value={form.court_filing_date}
          onChange={handleChange("court_filing_date")}
          type="date"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
          />

        <TextField
          className={classes.textField}
          name="case_notes"
          label="Case Notes"
          helperText="if applicable"
          multiline
          rows="8"
          value={form.case_notes}
          onChange={handleChange("case_notes")}
          margin="normal"
          variant="outlined"
          />

        <TextField
          className={classes.textField}
          name="description"
          label="Description of Conflict"
          multiline
          rows="8"
          value={form.description}
          onChange={handleChange("description")}
          margin="normal"
          variant="outlined"
          />

        <Button className={classes.button} onClick={onSubmitHandler} variant="contained">Submit</Button>
      </form>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        titleText={'Case created'}
        bodyText={''}
        redirect={'/cases'}
        redirectText={'Cases'}
      />
      <SimpleDialog
        open={errorOpen}
        onClose={handleErrorClose}
        titleText={'Error creating case'}
        bodyText={'Please try again'}
        redirect={''}
        redirectText={''}
        />
    </div>
  )
}


export default CourtForm;