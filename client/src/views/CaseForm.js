/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';

/**
 * Define component
 */

let baseurl
    if (process.env.NODE_ENV === 'production') {
       baseurl = "https://bravproduction.herokuapp.com/users?offset="
    } else {
       baseurl = "https://brav-staging.herokuapp.com/users?offset="
    }

function CaseForm(){
    const [form, setValues] = useState({
      "category":"",
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


    const onSubitHandler=e=>{
      e.preventDefault();
      console.log(form)
      // axios
      // .post(`${baseurl}/cases`,form)
    }


    return (
      <div className="App" >
        <form style={{display:'flex',flexDirection:"row"}} > 
        <label >Type Of Conflict:<input type="text" name="category" value={form.category} onChange={updateField}/><br/></label>
        <label >Email:<input type="email" name="email" value={form.email} onChange={updateField}/><br/></label>
        <label >Parties Involed:<textarea id="confirmationText"  cols="15" rows ="8" name="partiesInvolved" value={form.partiesInvolved} onChange={updateField}></textarea><br/></label>
        <label >Short Description of Conflict:<textarea id="confirmationText"  cols="86" rows ="20" name="description" value={form.description} onChange={updateField}></textarea><br/></label>
        <button onClick={onSubitHandler}>submit</button>
        </form>
      </div>
    )
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;