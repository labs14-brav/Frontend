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

/**
 * Constants
 */

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

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    container: {
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
    },
    noLabel: {
        marginTop: theme.spacing(3)
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

/**
 * Define view
 */

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
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    const classes = useStyles();
    const languages = ["English", "Spanish", "Chinese"];
    const specializations = ["Landlord/Tenant", "Eldercare", "Commercial", "Domestic", "Workplace", "Penal", "Other"];

    const handleChange = prop => e => {
        setValues({ ...values, [prop]: e.target.value });
    };

    const handleSubmit = () => {
        let parcel = values;
        if (parcel.specialization.length > 0) {
           parcel.specialization = JSON.stringify(parcel.specialization);
        }
        if (parcel.language.length > 0) {
            parcel.language = JSON.stringify(parcel.language);
        }
        const id = localStorage.getItem("id");
        axioswithAuth()
            .put(`/users/${id}/mediator-upgrade`, parcel)
            .then(res => {
                handleOpen();
            })
            .catch(error => {
                handleErrorOpen();
                console.error(error);
            })

            // Resetting specialization and language to avoid .join errors with the stringified selected values
            setValues({
                specialization: [],
                language: [],})
    };

    function handleOpen() {
        setOpen(true);
      }

    function handleErrorOpen() {
        setErrorOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleErrorClose() {
        setErrorOpen(false);
    }

    return (
        <>
            <Container maxWidth="sm" className={classes.container}>
            <Typography style={{textAlign:"center", paddingBottom: "20px",marginTop:"100px"}} variant="h3" data-testid="heading-h3">Mediator Registration</Typography>
            <Typography style={{textAlign:"center"}} variant="subtitle2">All fields are required for submission.</Typography>
            <FormGroup>
            <TextField
                    className={classes.textField}
                    label="Full Name"
                    value={values.name}
                    onChange={handleChange("name")}
                    variant="outlined"
                    data-testid="input-name"
                />

                <TextField
                    label="General Details"
                    value={values.general_details}
                    onChange={handleChange("general_details")}
                    data-testid="input-general_details"
                    className={classes.textField}
                />
                <TextField
                    value={values.license}
                    onChange={handleChange("license")}
                    data-testid="input-license"
                    className={classes.textField}
                    label="License"
                    helperText="List any licenses related directly to your mediator qualifications. Separate multiple with commas."
                    variant= "outlined"
                />
                <FormControl className={classes.select}>
                    <InputLabel htmlFor="age-simple">
                        Experience
                    </InputLabel>
                    <Select
                        onChange={handleChange("experience")}
                        value={values.experience}
                        data-testid="input-experience"
                    >
                        <MenuItem value={`<2 years`}>{`Less than 2 years`}</MenuItem>
                        <MenuItem value={`2-5 years`}>{`2-5 years`}</MenuItem>
                        <MenuItem value={`>5 years`}>{`More than 5 years`}</MenuItem>
                    </Select>
                </FormControl>

                <FormControl  className={classes.select}>
                    <InputLabel htmlFor="select-specialization-checkbox">
                        Specializations
                    </InputLabel>
                    <Select
                        multiple
                        value={values.specialization}
                        onChange={handleChange("specialization")}
                        input={<Input id="select-specialization-checkbox" />}
                        data-testid="input-specialization"
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
                    <InputLabel htmlFor="select-language-checkbox">
                        Language
                    </InputLabel>
                    <Select
                        multiple
                        value={values.language}
                        onChange={handleChange("language")}
                        input={<Input id="select-language-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        data-testid="input-language"
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
                        label="Price - $/hr"
                        value={values.price}
                        min={0}
                        step={1}
                        onChange={handleChange("price")}
                        data-testid="input-price"
                        className={classes.select}
                        margin="dense"
                        helperText="You will be able to adjust your rate on a case-by-case basis."
                    />

                    <TextField
                    className={classes.textField}
                    label="Brief Professional Summary"
                    helperText="Use this to distinguish yourself in a user's search for a mediator."
                    value={values.professional_bio}
                    multiline
                    rows="8"
                    onChange={handleChange("professional_bio")}
                    variant="outlined"
                />


                <Typography className={classes.subtext} variant="subtitle2"> I attest that the information given in this form is true, complete and accurate. </Typography>
                <Button className={classes.button} onClick={() => handleSubmit()} variant="outlined">Submit</Button>
            </FormGroup>
            </Container>

            <SimpleDialog
            open={open}
            onClose={handleClose}
            titleText={'Registration Completed'}
            bodyText={'An admin will approve your request as soon as possible'}
            redirect={'/users/settings'}
            redirectText={'Settings'}
            />

            <SimpleDialog
            open={errorOpen}
            onClose={handleErrorClose}
            titleText={'Error submitting the form'}
            bodyText={'Please make sure you complete all of the fields'}
            redirect={''}
            redirectText={''}
            />
        </>
    );
}

/**
 * Export view
 */

export default MediatorRegistration;
