import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminMediatorRequestList } from '../components';


const AdminHome=(props)=>{

            return (
                    <div>
                        <h1>AdminMediatorRequestList</h1>
                        <AdminMediatorRequestList/>
                    </div>

            )


}
export default AdminHome