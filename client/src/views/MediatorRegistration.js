import React, { useState } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    ListItemText
} from "@material-ui/core";
import axioswithAuth from '../helpers/axioswithAuth';

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
    root: {
        display: "flex",
        flexWrap: "wrap"
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
        general_details: ""
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
        console.log(values,"values")
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
            <Container maxWidth="sm" style={{paddingTop:"15%"}}>
            <h1>Mediator Registration</h1>
            <FormGroup>
            <TextField
                    label="Full Name"
                    value={values.name}
                    onChange={handleChange("name")}
                />
                <TextField
                    label="General Details"
                    value={values.general_details}
                    onChange={handleChange("general_details")}
                />
                <TextField
                    label="License Number"
                    value={values.license}
                    onChange={handleChange("license")}
                />
                <FormControl>
                    <InputLabel htmlFor="age-simple">
                        Years of Experience
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

                <FormControl className={classes.formControl}>
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

                <FormControl className={classes.formControl}>
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
                        onChange={handleChange("price")}
                        className={classes.PriceInput}
                        margin="dense"
                        helperText="Dollars/Hour"
                    />
                <FormControl>

                    </FormControl>

                <Button onClick={() => handleSubmit()}>Submit</Button>
            </FormGroup>
            </Container>
        </>

    );
}

export default MediatorRegistration;
