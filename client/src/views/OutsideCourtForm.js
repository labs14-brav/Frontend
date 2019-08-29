/**
 * Dependencies
 */

import React, { useState } from "react";
import SimpleDialog from "../components/modals/SimpleDialog";
import axioswithAuth from "../helpers/axioswithAuth";
import mixpanel from "../helpers/mixpanel";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

/**
 *  Define styles
 */

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "75%",
        maxWidth: 400,
        color: "#598EBF"
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
    },
    outlinedRoot: {
        "&$focused $notchedOutline": {
            borderColor: "#598EBF",
            borderWidth: 1,
            color: "#598EBF"
        }
    },
    notchedOutline: {},
    focused: {},
    multilineColor: {
        color: "#598EBF"
    }
}));

/**
 * Define component
 */

const OutsideCourtForm = props => {
    const classes = useStyles();
    const [form, setValues] = useState({
        case_initiator: "",
        court_case: false,
        parties_involved: "",
        parties_contact_info: "",
        description: "",
        dispute_category: "",
        dispute_amount: null,
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
     * Form methods
     */

    const handleChange = name => event => {
        setValues({ ...form, [name]: event.target.value });
    };

    const onSubmitHandler = async e => {
        e.preventDefault();
        let posted = await axioswithAuth()
            .post(`/cases`, form)
            .then(res => {
                if (process.env.NODE_ENV === "production") {
                    mixpanel.track("Create non-court case", {
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

    const InputProps = {
        classes: {
            root: classes.outlinedRoot,
            color: classes.multilineColor,
            notchedOutline: classes.notchedOutline,
            focused: classes.focused
        }
    };

    return (
      <div style={{paddingTop:"100px"}}>
          <Typography style={{textAlign:"center"}} variant="h3" data-testid="heading-h3">Case Form</Typography>
          <Typography style={{textAlign:"center"}} variant="subtitle2">This form is intended for cases outside of the Court system.</Typography>

          <form className={classes.container} noValidate autoComplete="off" onSubmit={onSubmitHandler}>
            <TextField
              className={classes.textField}
              select
              label="Dispute Type"
              value={form.dispute_category}
              helperText="required"
              data-testid="input-dispute_category"
              onChange={handleChange("dispute_category")}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                }
              }}
              variant="outlined"
              InputProps = {InputProps}
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
                    label="Full Name"
                    helperText="Please provide your first and last name."
                    type="email"
                    name="case_initiator"
                    margin="normal"
                    variant="outlined"
                    data-testid="input-case_initiator"
                    onChange={handleChange("case_initiator")}
                    value={form.case_initiator}
                    InputProps={InputProps}
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
              InputProps = {InputProps}
              />

              <TextField
              className={classes.textField}
              label="Participant Contact Information"
              helperText="Please provide an email or phone number for each participant listed above"
              value={form.parties_contact_info}
              name="parties_contact_info"
              data-testid="input-parties_contact_info"
              onChange={handleChange("parties_contact_info")}
              margin="normal"
              variant="outlined"
              InputProps = {InputProps}/>

              <TextField
              className={classes.textField}
              label="Dispute Amount - Dollars"
              helperText="Please list the total monetary value of this dispute, if applicable."
              data-testid="input-dispute_amount"
              value={form.dispute_amount}
              name="dispute_amount"
              type="number"
              onChange={handleChange("dispute_amount")}
              margin="normal"
              variant="outlined"
              InputProps = {InputProps}/>

              <TextField
              className={classes.textField}
              name="description"
              label="Description of Conflict"
              data-testid="input-description"
              helperText="In your own words, please describe what happened."
              multiline
              rows="8"
              value={form.description}
              onChange={handleChange("description")}
              margin="normal"
              variant="outlined"
              InputProps = {InputProps}
              />

              <Button className={classes.button} onClick={onSubmitHandler} variant="contained" InputProps = {InputProps}>submit</Button>

          </form>

          <SimpleDialog
          open={open}
          onClose={handleClose}
          titleText={'Case created'}
          bodyText={''}
          redirect={'/cases'}
          redirectText={'Cases'}
          />

          <SimpleDialog
          open={errorOpen}
          onClose={handleErrorClose}
          titleText={'Error creating case'}
          bodyText={'Please try again'}
          redirect={''}
          redirectText={''}
          />
      </div>
    )
}

/**
 * Export component
 */

export default OutsideCourtForm;
