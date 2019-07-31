import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


function MediatorFilter(props) {
    const [specialty, setSpecialty] = useState("");
    const [price, setPrice] = useState("");
    const [experience, setExperience] = useState("");
    const [language, setLanguage] = useState("");

    useEffect(() => {

    }, [])

    onChange = event => {
        
    }

    return (
        <div className="filter-container">



        </div>
    )

}


export default MediatorFilter;