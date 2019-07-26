import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function MediatorCasesShow() {

    // const fakeCases = [
    //     {
    //         description: "sdfghjmnfdbfsvdcsfgh",
    //         dispute_category: "Eldercsdfare",
    //         id: 22,
    //         parties_involved: "asssdfc@gmail.com",
    //         user_email: "tacofisdfsh2299@gmail.com",
    //         user_uid: "NssbtkAzIEsdfYoJfn6iFf5a2o0bq03",
    //     },
    //     {
    //         description: "sdfghjmnfdbfsvdcsfgh",
    //         dispute_category: "Eldercaresdfs",
    //         id: 23,
    //         parties_involved: "asfsdfssc@gmail.com",
    //         user_email: "tacofissdfh2299@gmail.com",
    //         user_uid: "NssbtkAzIEYoJfn6iFf5a2o0bq03",
    //     },
    //     {
    //         description: "sdffdbfsvdcsfgh",
    //         dispute_category: "Eldercare",
    //         id: 24,
    //         parties_involved: "asdfsssc@gmail.com",
    //         user_email: "tacofish2sdfsdf99@gmail.com",
    //         user_uid: "NssbtkAsdfsdfzIEYoJfn6iFf5a2o0bq03",
    //     },
    //     {
    //         description: "sdfghsdfsjmnfdbfsvdcsfgh",
    //         dispute_category: "Eldesdfsdfsrcare",
    //         id: 25,
    //         parties_involved: "aasdfsdfsdfssc@gmail.com",
    //         user_email: "tacofish2299@gmail.com",
    //         user_uid: "NssbtksdfsdfAzIEYoJfn6iFf5a2o0bq03",
    //     },

    // ];

    const [cases,setCases]= useState([])
    useEffect(() => {
        async function fetchCases() {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/cases`,{
            headers: {
              "Authorization": localStorage.getItem('token'),
            },});
          setCases(res.data);
        }
        fetchCases()
      },[]);

    return (
        <div>
            <h1>cases</h1>
            <ul>{cases.map((cases, index) => {
            return <div>
                <li key={index}>{cases.dispute_category}  </li>
                <li>{cases.user_email}</li>
                    <button><Link to={`/cases/${cases.id}`}>view details</Link></button>
            </div>
                
            })}</ul>
        </div>
    )
}
