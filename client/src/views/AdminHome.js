import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminMediatorRequestList } from '../components';
import {
    HeaderH1,
    
  } from './styles/index'
import { 
    Button,
    Grid, 
} from "@material-ui/core";


const AdminHome=(props)=>{

            return (
               
    <div container style={{paddingTop:"10%", margin: '20px 40px',}}>
                
                <h1 style={{textAlign:"center"}}>RequestList</h1>
                <AdminMediatorRequestList/>
            
        </div>
            

        )


}
export default AdminHome