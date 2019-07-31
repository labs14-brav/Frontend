import React, { useState, useEffect } from 'react';

/**
 * Material UI dependencies
 */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
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




function MediatorFilter(props) {
    // const [specialty, setSpecialty] = useState("");
    // const [price, setPrice] = useState("");
    // const [experience, setExperience] = useState("");
    // const [language, setLanguage] = useState("");
    const [filter, setFilter] = useState({
        specialty: '',
        language: '',
        price: '',
        experience: '',
    })
    
    //material ui styles
    const classes = useStyles();

    //mimic CDM to populate the inputs
    useEffect(() => {

    }, [])

    //handleChanges for inputs
    const handleChanges = event => {
        console.log(event.target);
        setFilter({ ...filter,
            [event.target.name] : event.target.value,
        })
    }

    return (
        <div className={classes.container}>
            <form>
            <div className="left-container">
                <TextField
                className={classes.textField}
                select
                label="Specialty"
                name="specialty"
                value={filter.specialty}
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
                </TextField>

                <TextField
                className={classes.textField}
                select
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
                    <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
                    <MenuItem value="Penal">Penal</MenuItem>
                </TextField>
            </div>
            <div className="right-container">
                <TextField
                    className={classes.textField}
                    select
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
                        <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
                        <MenuItem value="Penal">Penal</MenuItem>
                </TextField>

                <TextField
                    className={classes.textField}
                    select
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
                        <MenuItem value="Landlord/Tenant">Landlord/Tenant</MenuItem>
                        <MenuItem value="Penal">Penal</MenuItem>
                </TextField>
            </div>
            </form>
        </div>
    )

}


export default MediatorFilter;