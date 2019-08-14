/**
 * Dependencies
 */

import React, { useState } from "react";
import SimpleDialog from "./modals/SimpleDialog";
import { axioswithAuth, mixpanel } from "../helpers/index";

/**
 * Material-UI
 */
import TextField from "@material-ui/core/TextField";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
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

const InvoiceForm = props => {
    const classes = useStyles();
    const [form, setValues] = useState({
        mediator_id: localStorage.getItem("id"),
        stripe_user_id: 123459,
        case_id: props.caseId,
        amount: "",
        hours: ""
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
            .post(`/invoices/${props.caseId}/invoice`, form)
            .then(res => {
                console.log("add new case: ", res.data);
                if (process.env.NODE_ENV === "production") {
                    mixpanel.track("creating invoice", {
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
        <div style={{ paddingTop: "100px" }}>
            <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                <TextField
                    className={classes.textField}
                    label="Hours"
                    type="email"
                    name="hours"
                    margin="normal"
                    variant="outlined"
                    onChange={handleChange("hours")}
                    value={form.hours}
                    InputProps={InputProps}
                />

                <TextField
                    className={classes.textField}
                    label="Rate"
                    value={form.amount}
                    name="amount"
                    onChange={handleChange("amount")}
                    margin="normal"
                    variant="outlined"
                    InputProps={InputProps}
                />

                <Button
                    className={classes.button}
                    onClick={onSubmitHandler}
                    variant="contained"
                    InputProps={InputProps}
                >
                    submit
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
 * Export component
 */

export default InvoiceForm;
