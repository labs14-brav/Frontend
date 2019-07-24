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
    FormControl
} from "@material-ui/core";

function MediatorRegistration() {
    const [values, setValues] = useState({
        license: "",
        experience: "",
        specialization: "",
        language: ""
    });

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
                        <MenuItem value="automobile">Automobile</MenuItem>
                        <MenuItem value="landlord & tenant">Landlord & Tenant</MenuItem>
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
                <Button onClick={() => handleSubmit()} >Submit</Button>
            </FormGroup>
        </Container>
    );
}

export default MediatorRegistration;
