/**
 * Dependencies
 */

import React, { useState, Component } from 'react';
import axios from 'axios';

// maerial-ui imports

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';

/**
 * Define component
 */


let baseurl
if (process.env.NODE_ENV === 'production') {
   baseurl = "https://bravproduction.herokuapp.com/users?offset="
} else {
   baseurl = "https://brav-staging.herokuapp.com/users?offset="
}

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
            // width: 200,
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
        "parties_involved":"",
        "description":"",
        "dispute_category":""
      });
      
      
      const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
      };
      
      const onSubmitHandler = async e =>{
        e.preventDefault();
        console.log(form,"form")
        await axios
        .post(`${process.env.REACT_APP_API_URL}/cases`,form,{
          headers: {
            "Authorization": localStorage.getItem('token'),
          },})
        .then(res => {
          console.log("add new case: ", res.data)
        })
        .catch(err => {
          console.log("add case err", err.response)
        })
        props.history.push("/home");
      }


    return (

      <div style={{maxWidth:"1100px",margin:"0 auto",padding:"100px"}}>

          <h1 style={{textAlign:"center"}}>Case form</h1>
    
          <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

              <Select
                value={form.dispute_category}
                onChange={handleChange("dispute_category")}
              >
                <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
                <MenuItem value="Eldercare">Eldercare</MenuItem>
                <MenuItem value="Commercial">Commercial</MenuItem>
                <MenuItem value="Domestic">Domestic</MenuItem>
                <MenuItem value="Workplace">Workplace</MenuItem>
                <MenuItem value="Penal">Penal</MenuItem>
            </Select>

              <TextField
              label="Third Party Email"
              type="email"
              name="parties_involved"
              autoComplete="email"
              margin="normal"
              variant="outlined"
              onChange={handleChange("parties_involved")}
              value={form.parties_involved}  
            />

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

              <Button className={classes.button} onClick={onSubmitHandler}>submit</Button>

          </form>
      </div>
    )
}


export default CourtForm;