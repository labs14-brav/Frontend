/**
 * Dependencies
 */

import React, { useState } from 'react';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { textAlign } from '@material-ui/system';

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
        justifyContent:'space-between',
        alignItems:'space-between'
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
        "partiesInvolved":""
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
      
      const onSubitHandler = async e =>{
        e.preventDefault();
        console.log(form)
        await axios
        .post(`${baseurl}/cases`,form)
        props.history.push("/home");
      }


    return (
      // <div className="App" style={{maxWidth:"800px",margin:"0 auto"}}>

      //    <form style={{padding:"20px",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"spaceAround"}} onSubmit={onSubitHandler}> 
        
      

      //     <div style={{display:"flex",flexDirection:"column"}}>
      //     <label htmlFor="inputCategory">Type Of Conflict:</label>
      //     <input id="inputCategory" type="text" name="disputeCategory" value={form.disputeCategory} onChange={updateField} required/>
      //     </div>
         
  
          
      //     <div style={{display:"flex",flexDirection:"column"}}>
      //     <label htmlFor="inputEmail">Parties Involed:Email</label>
      //     <input id="inputEmail" type="email" name="email" value={form.email} onChange={updateField} />
      //     </div>
          

          
      //     <div style={{display:"flex",flexDirection:"column"}}>
      //     <label htmlFor="inputDescription">Short Description of Conflict:</label>
      //     <textarea id="inputDescription"  cols="86" rows ="20" name="description" value={form.description} onChange={updateField}></textarea>
      //     </div>

       

      //   <button style={{width:"100px",margin:"0 auto", marginTop:"20px"}}onClick={onSubitHandler}>submit</button>

      //   </form> 


      // </div>

      <div style={{maxWidth:"800px",margin:"0 auto"}}>
        <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubitHandler}>

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
            label="Short Description of Conflict"
            multiline
            rowsMax="8"
            value={form.description}
            onChange={updateField}
            margin="normal"
            variant="outlined"
            />
        </form>


      </div>
    )
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;