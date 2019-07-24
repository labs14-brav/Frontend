import React, { useState } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
    }
}));

function MediatorRegistration() {
    // this is the state of all the inputs in the form
    const [values, setValues] = useState({
        license: "",
        experience: "",
        specializations: [],
        languages: []
    });

    const classes = useStyles();
    const languages = ["english", "spanish", "french"];
    const specializations = ["accounting", "divorce", "landlord & tenant"];

    const handleChange = prop => e => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleSubmit = () => {
        console.log("values", values);
    };

    return (
        <Container maxWidth="sm">
            <h1>Mediator Registration</h1>
            <FormGroup>
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
                        <MenuItem value={`<2yrs`}>{`less than 2yrs`}</MenuItem>
                        <MenuItem value={`2-5yrs`}>{`2-5yrs`}</MenuItem>
                        <MenuItem value={`>5yrs`}>{`more than 5yrs`}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Specializations
                    </InputLabel>
                    <Select
                        multiple
                        value={values.specializations}
                        onChange={handleChange("specializations")}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {specializations.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={
                                        values.specializations.indexOf(name) >
                                        -1
                                    }
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Languages
                    </InputLabel>
                    <Select
                        multiple
                        value={values.languages}
                        onChange={handleChange("languages")}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {languages.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={values.languages.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Button onClick={() => handleSubmit()}>Submit</Button>
            </FormGroup>
        </Container>
    );
}

export default MediatorRegistration;
