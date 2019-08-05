import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminMediatorRequestList } from '../components';
import { 
    Button,
    Grid, 
} from "@material-ui/core";


const AdminHome=(props)=>{

            return (
                <>
                <Grid container style={{ height: '100vh' }}>
                    <Grid item xs={8} sm={9} lg={10} style={{ backgroundColor: "#ECF6FF",display:"flex",justifyContent:"center",alignItems:"Center"}}>
                    <h1>AdminMediatorRequestList</h1>
                    <AdminMediatorRequestList/>
    
                    </Grid>
                </Grid>
                </>

            )


}
export default AdminHome