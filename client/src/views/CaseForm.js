/**
 * Dependencies
 */

import React, { useState } from 'react';
import axios from 'axios';

// maerial-ui imports

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

/**
 * Define component
 */


let baseurl
if (process.env.NODE_ENV === 'production') {
   baseurl = "https://bravproduction.herokuapp.com/users?offset="
} else {
   baseurl = "https://brav-staging.herokuapp.com/users?offset="
}

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

    const disputeCategory = [
      {
        value: 'Landlord/Tenant',
        label: 'Landlord/Tenant',
      },
      {
        value: 'Eldercare',
        label: 'Eldercare',
      },
      {
        value: 'Commercial disputes',
        label: 'Commercial disputes',
      },
      {
        value: 'Workplace conflicts',
        label: 'Workplace conflicts',
      },
      {
        value: 'Penal issues',
        label: 'Penal issues',
      },
      {
        value: 'Domestic violence',
        label: 'Domestic violence',
      },
    ];


const CaseForm = (props) =>{
  const classes = useStyles();
  
      const [form, setValues] = useState({
        "disputeCategory":"",
        "email":"",
        "description":"",
      });

      const updateField = e => {
        setValues({
          ...form,
        [e.target.name]: e.target.value
        })
      }
      
      const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
      };
      
      const onSubmitHandler = async e =>{
        e.preventDefault();
        console.log(form)
        await axios
        .post(`${baseurl}/cases`,form)
        props.history.push("/home");
      }


    return (

      <div style={{maxWidth:"800px",margin:"0 auto",padding:"100px"}}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>

            <TextField
            required
            select
            className={classes.textField}
            value={form.disputeCategory}
            onChange={handleChange("disputeCategory")}
            
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your category"
            margin="normal"
          >
            {disputeCategory.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

            <TextField
            label="Third Party Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={updateField}
            value={form.email}
           
          />

            <TextField
            name="description"
            label="Description of Conflict"
            multiline
            rowsMax="8"
            value={form.description}
            onChange={updateField}
            margin="normal"
            variant="outlined"
          
            />

            <Button className={classes.button} onClick={onSubmitHandler}>submit</Button>

        </form>
      </div>
    )
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;