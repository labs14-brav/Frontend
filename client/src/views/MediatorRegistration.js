/**
 * Dependencies
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    FormGroup,
    Container,
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    Input,
    Checkbox,
    ListItemText,
    Typography
} from "@material-ui/core";
import axioswithAuth from '../helpers/axioswithAuth';
import SimpleDialog from '../components/modals/SimpleDialog';

// adds styles to select inputs
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    textField: {
        alignSelf: 'center',
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '75%',
        maxWidth:400,
        color: '#598EBF'
    },
    select: {
        alignSelf: "center",
        width: '75%',
        maxWidth: 400,
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    formControl: {
        // margin: theme.spacing(1),
        // minWidth: 120,
        // maxWidth: 300
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: 2
    },
    noLabel: {
        marginTop: theme.spacing(3)
    },
    PriceInput: { 
        width: 75,
    },
    button: {
        alignSelf: "center",
        margin: theme.spacing(1),
        marginBottom: theme.spacing(5),
        width: '75%',
        maxWidth: 400,
        height: 60,
        color: 'white',
        backgroundColor: '#5C90C1',
        "&:hover": {
          backgroundColor: "#517EA8"
        },
        "&:active": {
          backgroundColor: "#476e91"
        }
    },
    subtext: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        alignSelf: 'center',
        textAlign: 'center',
        width: '75%',
        maxWidth: 400,
    }
}));

function MediatorRegistration(props) {
    // this is the state of all the inputs in the form
    const [values, setValues] = useState({
        type: "user",
        name:"",
        license: "",
        experience: "",
        price: 0,
        specialization: [],
        language: [],
        professional_bio: ""
    });

    const classes = useStyles();
    const languages = ["English", "Spanish", "Chinese"];
    const specializations = ["Landlord/Tenant", "Eldercare", "Commercial", "Domestic", "Workplace", "Penal", "Other"];

    const handleChange = prop => e => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleSubmit = () => {
        values.specialization = JSON.stringify(values.specialization);
        values.language = JSON.stringify(values.language);
        const id = localStorage.getItem("id");
        axioswithAuth()
            .put(`/users/${id}/mediator-upgrade`, values)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.error(error);
            })
            //need to add some sort of confirmation message here
        props.history.push('/users/settings')
    };

    return (
        <>
            <Container maxWidth="sm" className={classes.container}>
            <Typography style={{textAlign:"center", paddingBottom: '20px'}} variant="h3">Mediator Registration</Typography>
            <FormGroup>
            <TextField
                    className={classes.textField}
                    label="Full Name"
                    value={values.name}
                    onChange={handleChange("name")}
                    variant="outlined"
                />
                
                <TextField
                    className={classes.textField}   
                    label="License Number"
                    value={values.license}
                    onChange={handleChange("license")}
                    variant= "outlined"
                />
                <FormControl className={classes.select}>
                    <InputLabel htmlFor="age-simple">
                        Experience
                    </InputLabel>
                    <Select
                        onChange={handleChange("experience")}
                        value={values.experience}
                    >
                        <MenuItem value={`<2 years`}>{`Less than 2 years`}</MenuItem>
                        <MenuItem value={`2-5 years`}>{`2-5 years`}</MenuItem>
                        <MenuItem value={`>5 years`}>{`More than 5 years`}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl  className={classes.select}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Specializations
                    </InputLabel>
                    <Select
                        multiple
                        value={values.specialization}
                        onChange={handleChange("specialization")}
                        input={<Input id="select-multiple-checkbox" />}
                        // renderValue={selected => selected.join(", ")}
                        renderValue={() => values.specialization.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {specializations.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={
                                        values.specialization.indexOf(name) > -1
                                    }
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl  className={classes.select}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Language
                    </InputLabel>
                    <Select
                        multiple
                        value={values.language}
                        onChange={handleChange("language")}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {languages.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={values.language.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                    <TextField
                        id="standard-dense"
                        type="number"
                        label="Price"
                        value={values.price}
                        min={0}
                        step={1}
                        onChange={handleChange("price")}
                        className={classes.select}
                        margin="dense"
                        helperText="Dollars/Hour"
                    />

                    <TextField
                    className={classes.textField}
                    label="Brief Personal Summary"
                    value={values.general_details}
                    multiline
                    rows="8"
                    onChange={handleChange("general_details")}
                    variant="outlined"
                />


                <Typography className={classes.subtext} variant="subtitle2"> I attest that the information given in this form is true, complete and accurate. </Typography>
                <Button className={classes.button} onClick={() => handleSubmit()} variant="outlined">Submit</Button>
            </FormGroup>
            </Container>

            <SimpleDialog
            open={open}
            onClose={handleClose}
            titleText={'Case created'}
            bodyText={''}
            redirect={'/cases'}
            redirectText={'Cases'}
            />

        </>

    );
}

export default MediatorRegistration;
