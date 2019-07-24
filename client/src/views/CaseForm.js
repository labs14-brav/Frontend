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

const CaseForm = (props) =>{
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


    const onSubitHandler = async e =>{
      e.preventDefault();
      console.log(form)
      await axios
      .post(`${baseurl}/cases`,form)
      props.history.push("/home");
    }


    return (
      <div className="App" style={{maxWidth:"800px",margin:"0 auto"}}>

        <form style={{padding:"20px",marginTop:"50px",display:"flex",flexDirection:"column",justifyContent:"spaceAround"}} onSubmit={onSubitHandler}> 


          <div style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="inputCategory">Type Of Conflict:</label>
          <input id="inputCategory" type="text" name="disputeCategory" value={form.disputeCategory} onChange={updateField} required/>
          </div>
          

          
          <div style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="inputEmail">Parties Involed:Email</label>
          <input id="inputEmail" type="email" name="email" value={form.email} onChange={updateField} />
          </div>
          

          
          <div style={{display:"flex",flexDirection:"column"}}>
          <label htmlFor="inputDescription">Short Description of Conflict:</label>
          <textarea id="inputDescription"  cols="86" rows ="20" name="description" value={form.description} onChange={updateField}></textarea>
          </div>

       

        <button style={{width:"100px",margin:"0 auto", marginTop:"20px"}}onClick={onSubitHandler}>submit</button>

        </form>
      </div>
    )
  };
  
  /**
   * Export view
   */
  
  export default CaseForm;