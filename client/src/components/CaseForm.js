/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';

/**
 * Define component
 */

function CaseForm(){
    const [form, setValues] = useState({
      "category":"e",
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



    return (
      <div className="App" >
        <form style={{display:'flex',flexDirection:"row"}}> 
        <label >Type Of Conflict:<input type="text" name="category" value={form.category} onChange={updateField}/><br/></label>
        <label >Email:<input type="email" name="email" value={form.email} onChange={updateField}/><br/></label>
        <label >Parties Involed:<textarea id="confirmationText" class="text" cols="15" rows ="8" name="partiesInvolved" value={form.partiesInvolved} onChange={updateField}></textarea><br/></label>
        <label >Short Description of Conflict:<textarea id="confirmationText" class="text" cols="86" rows ="20" name="description" value={form.description} onChange={updateField}></textarea><br/></label>
        </form>
      </div>
    )
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;