import React, { useState } from "react";
import axios from "axios";
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

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300
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
    const [values, setValues] = useState({
        license: "",
        experience: "",
        specialization: "",
        language: ""
    });

    const classes = useStyles();

    const names = ["tyler", "andy", "michael"];

    const [personName, setPersonName] = React.useState([]);

    const handleChange = prop => e => {
        setValues({ ...values, [prop]: e.target.value });
    };

    function handleChangeMultiple(event) {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    }

    const handleSubmit = () => {
        console.log("values", values);
    };

    return (
        <Container maxWidth="sm">
            <h1>Mediator Registration</h1>
            <FormGroup>
                <TextField
                    label="License Number"
                    variant="outlined"
                    value={values.license}
                    onChange={handleChange("license")}
                />
                <FormControl>
                    <InputLabel htmlFor="age-simple">Specialization</InputLabel>
                    <Select
                        onChange={handleChange("specialization")}
                        value={values.specialization}
                    >
                        <MenuItem value="accounting">Accounting</MenuItem>
                        <MenuItem value="divorce">Divorce</MenuItem>
                        <MenuItem value="landlord & tenant">
                            Landlord & Tenant
                        </MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="age-simple">
                        Years of Experience
                    </InputLabel>
                    <Select
                        onChange={handleChange("experience")}
                        value={values.experience}
                    >
                        <MenuItem value={`>2yrs`}>{`>2yrs`}</MenuItem>
                        <MenuItem value={`2-5yrs`}>{`2-5yrs`}</MenuItem>
                        <MenuItem value={`<5yrs`}>{`<5yrs`}</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="age-simple">Language</InputLabel>
                    <Select
                        onChange={handleChange("language")}
                        value={values.language}
                    >
                        <MenuItem value={"english"}>English</MenuItem>
                        <MenuItem value={"spanish"}>Spanish</MenuItem>
                        <MenuItem value={"french"}>French</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Tag
                    </InputLabel>
                    <Select
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={personName.indexOf(name) > -1}
                                />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-checkbox">
                        Tag
                    </InputLabel>
                    <Select
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox
                                    checked={personName.indexOf(name) > -1}
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
