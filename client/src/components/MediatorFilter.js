import React, { useState, useEffect } from 'react';
import { MediatorList } from './index';

/**
 * Material UI dependencies
 */
import { makeStyles } from '@material-ui/core/styles';
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
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
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
    const [filter, setFilter] = useState({
        specialty: '',
        language: '',
        price: '',
        experience: '',
    })

    //console.log("filter props", props);
    
    //material ui styles
    const classes = useStyles();

    //mimic CDM to populate the inputs
    useEffect(() => {
        setFilter({
            specialty: props.currentcase.dispute_category
        })
    }, [])

    //handleChanges for inputs
    const handleChanges = event => {
        // console.log(event.target);
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
                    <MenuItem value="Other">Other</MenuItem>
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
                    <MenuItem value="<25">Less than 25$</MenuItem>
                    <MenuItem value="25-75">25-75$</MenuItem>
                    <MenuItem value=">75">Greater than 75$ </MenuItem>
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
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Spanish">Spanish</MenuItem>
                        <MenuItem value="Chinese">Chinese</MenuItem>
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
                        <MenuItem value={`<2 years`}>{`Less than 2 years`}</MenuItem>
                        <MenuItem value={`2-5 years`}>{`2-5 years`}</MenuItem>
                        <MenuItem value={`>5 years`}>{`More than 5 years`}</MenuItem>
                </TextField>
            </div>
            </form>
            <MediatorList filter={filter}/>
        </div>
    )

}


export default MediatorFilter;