import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminMediatorRequestList } from '../components';
import { 
    Button,
    Grid, 
} from "@material-ui/core";


const AdminHome=(props)=>{

            return (
                <div style={{  paddingTop:"100px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                padding:"40px",
                }}>

                <h1>AdminMediatorRequestList</h1>
                <AdminMediatorRequestList/>

            </div>

            )


}
export default AdminHome