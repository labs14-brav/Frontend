/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import { MediatorList } from './index';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
    Container,
    FormGroup,
    FormControl
} from "@material-ui/core";

/**
 * Material UI Styles
 */

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    textField: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    button: {
      margin: theme.spacing(1),
      width: 50,
    },
}));

/**
 * Define component
 */

function MediatorFilter(props) {
    const [filter, setFilter] = useState({
        specialization: '',
        language: '',
        price: '',
        experience: '',
    })
    
    // Material ui styles
    const classes = useStyles();

    // Mimic CDM to populate the inputs
    useEffect(() => {
        setFilter({
            specialization: props.currentcase.dispute_category
        })
    }, [])

    const handleChanges = event => {
        setFilter({ ...filter,
            [event.target.name] : event.target.value,
        })
    }

    return (
        <div className={classes.container}>
            <Grid container spacing={4} className="mb-4">
                <Grid item xs={6}>
                    <TextField
                    className={classes.textField}
                    select
                    fullWidth
                    label="Specialization"
                    name="specialization"
                    value={filter.specialization}
                    onChange={handleChanges}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        }
                    }}
                    >
                        <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
                        <MenuItem value="Eldercare">Eldercare</MenuItem>
                        <MenuItem value="Commercial">Commercial</MenuItem>
                        <MenuItem value="Domestic">Domestic</MenuItem>
                        <MenuItem value="Workplace">Workplace</MenuItem>
                        <MenuItem value="Penal">Penal</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                    className={classes.textField}
                    select
                    fullWidth
                    label="Price Range"
                    name="price"
                    value={filter.price}
                    onChange={handleChanges}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        }
                    }}
                    >
                        <MenuItem value="<25">Less than 25$</MenuItem>
                        <MenuItem value="25-75">25-75$</MenuItem>
                        <MenuItem value=">75">Greater than 75$ </MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            <Grid container spacing={4} className="mb-4">
                <Grid item xs={6}>
                    <TextField
                        className={classes.textField}
                        select
                        fullWidth
                        label="Language"
                        name="language"
                        value={filter.language}
                        onChange={handleChanges}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            }
                        }}
                        >
                            <MenuItem value="English">English</MenuItem>
                            <MenuItem value="Spanish">Spanish</MenuItem>
                            <MenuItem value="Chinese">Chinese</MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        className={classes.textField}
                        select
                        fullWidth
                        label="Experience"
                        name="experience"
                        value={filter.experience}
                        onChange={handleChanges}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            }
                        }}
                        >
                        <MenuItem value={`<2 years`}>{`Less than 2 years`}</MenuItem>
                        <MenuItem value={`2-5 years`}>{`2-5 years`}</MenuItem>
                        <MenuItem value={`>5 years`}>{`More than 5 years`}</MenuItem>
                    </TextField>
                </Grid>
            </Grid>

            <MediatorList filter={filter} currentcase={props.currentcase}/>
         </div>
    )
}

/**
 * Export component
 */

export default MediatorFilter;