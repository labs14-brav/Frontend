/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';

// maerial-ui imports

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

/**
 *  Define styles
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

const OutsideCourtForm = (props) => {
    const classes = useStyles();
  
    const [form, setValues] = useState({
      "court_case": false,
      "parties_involved":"",
      "parties_contact_info":"",
      "description": "",
      "dispute_category": "",
      "dispute_amount": null,
      "case_notes":""
    });
      
      
      const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
      };
      
      const onSubmitHandler = async e =>{
        e.preventDefault();
        let posted = await axioswithAuth().post(`/cases`, form)
            .then(res => {
            console.log("add new case: ", res.data)
            })
            .catch(err => {
            console.error(err.response)
            })
            window.location = '/cases';
        }

    return (

      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px 30px"}}>

          <h1 style={{textAlign:"center"}}>Outside Court Form</h1>
    
          <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

            <TextField
              className={classes.textField}
              select
              label="Dispute Type"
              value={form.dispute_category}
              helperText="required"
              onChange={handleChange("dispute_category")}
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
              value={form.parties_contact_info}
              name="parties_contact_info"
              onChange={handleChange("parties_contact_info")}
              margin="normal"
              variant="outlined"/>

              <TextField 
              className={classes.textField}
              label="Dispute Amount"
              helperText="if applicable"
              value={form.dispute_amount}
              name="dispute_amount"
              type="number"
              onChange={handleChange("dispute_amount")}
              margin="normal"
              variant="outlined"/>


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

              <Button className={classes.button} onClick={onSubmitHandler} variant="contained">submit</Button>

          </form>
      </div>
    )
}


export default OutsideCourtForm;