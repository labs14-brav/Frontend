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
 * Define component
 */

// Global Component Styles

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
            width: 200,
          },
          dense: {
            marginTop: 19,
          },
          menu: {
            width: 200,
          },
          button: {
            margin: theme.spacing(1),
            width: 50,
          },
    
    }));


const CourtForm = (props) => {
    const classes = useStyles();
    const [form, setValues] = useState({
        "court_case": true,
        "parties_involved":"",
        "parties_contact_info":"",
        "description":"",
        "dispute_category":"",
        "dispute_amount":null,
        "court_jurisdiction":"",
        "court_number":"",
        "court_filing_date":"",
        "case_notes":""
      });
      
      
      const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
      };
      
      const onSubmitHandler = async e =>{
        e.preventDefault();
        // console.log(form,"form")
        let created = await axioswithAuth().post(`/cases`, form)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.error(err.response)
        })
        // console.log(created);
        props.history.push("/home");
      }


    return (

      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px"}}>

          <h1 style={{textAlign:"center"}}>Case form</h1>
    
          <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

               
            <TextField
              className={classes.textField}
              select
              label="Case Type"
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
                <MenuItem value="Other">Other</MenuItem>
            </TextField>



              <TextField
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
              label="Participant Contact Info"
              name="parties_contact_info"
              value={form.parties_contact_info}
              onChange={handleChange("parties_contact_info")}
              margin="normal"
              variant="outlined"/>

              <TextField 
              label="Dispute Amount"
              name="dispute_amount"
              helperText="if applicable"
              value={form.dispute_amount}
              onChange={handleChange("dispute_amount")}
              margin="normal"
              variant="outlined"/>


              <TextField
              name="description"
              label="Description of Conflict"
              multiline
              rowsMax="8"
              value={form.description}
              onChange={handleChange("description")}
              margin="normal"
              variant="outlined"
              />

              <TextField
              name="court_jurisdiction"
              label="Jurisdiction"
              helperText="or Court ID"
              value={form.court_jurisdiction}
              onChange={handleChange("court_jurisdiction")}
              margin="normal"
              variant="outlined"
              />

              <TextField
              name="court_number"
              label="Case Number"
              value={form.court_number}
              onChange={handleChange("court_number")}
              margin="normal"
              variant="outlined"
              />

              <TextField
              name="court_filing_date"
              label="Case Filing Date"
              value={form.court_filing_date}
              onChange={handleChange("court_filing_date")}
              margin="normal"
              variant="outlined"
              />

              <TextField
              name="case_notes"
              label="Case Notes"
              helperText="if applicable"
              multiline
              rowsMax="8"
              value={form.case_notes}
              onChange={handleChange("case_notes")}
              margin="normal"
              variant="outlined"
              />

              <Button className={classes.button} onClick={onSubmitHandler}>submit</Button>

          </form>
      </div>
    )
}


export default CourtForm;