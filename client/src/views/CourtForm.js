/**
 * Dependencies
 */

import React, { useState } from "react";
import SimpleDialog from "../components/modals/SimpleDialog.js";
import axioswithAuth from "../helpers/axioswithAuth";
import mixpanel from "../helpers/mixpanel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 * Global Component Styles
 */

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "75%",
        maxWidth: 400
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 400
    },
    button: {
        margin: theme.spacing(1),
        width: "75%",
        maxWidth: 400,
        height: 60,
        color: "white",
        backgroundColor: "#5C90C1",
        "&:hover": {
            backgroundColor: "#517EA8"
        },
        "&:active": {
            backgroundColor: "#476e91"
        }
    }
}));

/**
 * Define component
 */

const CourtForm = props => {
    const classes = useStyles();
    const [form, setValues] = useState({
        court_case: true,
        case_initiator: "",
        parties_involved: "",
        parties_contact_info: "",
        description: "",
        dispute_category: "",
        dispute_amount: null,
        court_jurisdiction: "",
        court_number: "",
        court_filing_date: "",
        case_notes: ""
    });
    const [open, setOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    /**
     * Dialog Methods
     */

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

    /**
     *  Form Methods
     */

    const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("form", form);
        axioswithAuth()
            .post(`/cases`, form)
            .then(res => {
                console.log(res.data);
                if (process.env.NODE_ENV === "production") {
                    mixpanel.track("Create court case", {
                        distinct_id: localStorage.getItem("id")
                    });
                }
                handleOpen();
            })
            .catch(err => {
                console.error(err.response);
                handleErrorOpen();
            });
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <Typography
                style={{ textAlign: "center" }}
                variant="h3"
                data-testid="heading-h3"
            >
                Case Form
            </Typography>
            <Typography style={{ textAlign: "center" }} variant="subtitle2">
                This form is intended for cases referred by the Court system.
            </Typography>

            <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                <TextField
                    className={classes.textField}
                    select
                    label="Case Type"
                    value={form.dispute_category}
                    helperText="required"
                    onChange={handleChange("dispute_category")}
                    data-testid="input-dispute_category"
                    required
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu
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
                    label="Full Name"
                    type="email"
                    name="case_initiator"
                    helperText="Please provide your first and last name."
                    margin="normal"
                    variant="outlined"
                    data-testid="input-case_initiator"
                    onChange={handleChange("case_initiator")}
                    value={form.case_initiator}
                />

        <TextField
          className={classes.textField}
          label="Dispute Participants"
          type="email"
          name="parties_involved"
          helperText="Please list the names of the other parties involved in your dispute"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          data-testid="input-parties_involved"
          onChange={handleChange("parties_involved")}
          value={form.parties_involved}
          />

        <TextField
          className={classes.textField}
          label="Participant Contact Information"
          name="parties_contact_info"
          helperText="Please provide an email or phone number for each participant listed above"
          data-testid="input-parties_contact_info"
          value={form.parties_contact_info}
          onChange={handleChange("parties_contact_info")}
          margin="normal"
          variant="outlined"/>

                <TextField
                    className={classes.textField}
                    label="Dispute Amount - Dollars"
                    name="dispute_amount"
                    helperText="Please list the total monetary value of this dispute, if applicable."
                    value={form.dispute_amount}
                    type="number"
                    data-testid="input-dispute_amount"
                    onChange={handleChange("dispute_amount")}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    className={classes.textField}
                    name="court_jurisdiction"
                    label="Jurisdiction"
                    helperText="Please list the Jurisdiction or Court ID of the Court where this case was filed."
                    data-testid="input-court_jurisdiction"
                    value={form.court_jurisdiction}
                    onChange={handleChange("court_jurisdiction")}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    className={classes.textField}
                    name="court_number"
                    label="Case Number"
                    value={form.court_number}
                    data-testid="input-court_number"
                    onChange={handleChange("court_number")}
                    margin="normal"
                    variant="outlined"
                />

                <TextField
                    className={classes.textField}
                    name="court_filing_date"
                    label="Case Filing Date"
                    value={form.court_filing_date}
                    data-testid="input-court_filing_date"
                    onChange={handleChange("court_filing_date")}
                    type="date"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true
                    }}
                />

                <TextField
                    className={classes.textField}
                    name="case_notes"
                    label="Case Notes"
                    helperText="Please provide any Case notes if any."
                    multiline
                    rows="8"
                    value={form.case_notes}
                    data-testid="input-case_notes"
                    onChange={handleChange("case_notes")}
                    margin="normal"
                    variant="outlined"
                />

        <TextField
          className={classes.textField}
          name="description"
          label="Description of Conflict"
          multiline
          helperText="In your own words, please describe what happened."
          rows="8"
          value={form.description}
          data-testid="input-description"
          onChange={handleChange("description")}
          margin="normal"
          variant="outlined"
          />

                <Button
                    className={classes.button}
                    onClick={onSubmitHandler}
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
            <SimpleDialog
                open={open}
                onClose={handleClose}
                titleText={"Case created"}
                bodyText={""}
                redirect={"/cases"}
                redirectText={"Cases"}
            />
            <SimpleDialog
                open={errorOpen}
                onClose={handleErrorClose}
                titleText={"Error creating case"}
                bodyText={"Please try again"}
                redirect={""}
                redirectText={""}
            />
        </div>
    );
};

/**
 *  Export component
 */

export default CourtForm;
