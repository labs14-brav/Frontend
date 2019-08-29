/**
 * Dependencies
 */

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SimpleDialog from "./modals/SimpleDialog";
import { axioswithAuth, mixpanel } from "../helpers/index";

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
    fee: {
        fontSize: '10px',
        color: 'lightgrey'
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
            .post(`/invoices/case/${props.caseId}`, form)
            .then(res => {
                console.log("create invoice: ", res.data);
                if (process.env.NODE_ENV === "production") {
                    mixpanel.track("Create invoice", {
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
        <div style={{ paddingTop: "50px" }}>
            <form
                className={classes.container}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                <TextField
                    className={classes.textField}
                    label="Hours Billed"
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
                    label="Total Amount Due -$"
                    value={form.amount}
                    name="amount"
                    onChange={handleChange("amount")}
                    margin="normal"
                    variant="outlined"
                    InputProps={InputProps}
                />

                <h6 className = "fee" >A 30% application fee will be deducted from the total amount.</h6>

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
                titleText={"Invoice created"}
                bodyText={""}
                redirect={"/mediator-cases"}
                redirectText={"Mediator Cases"}
            />

            <SimpleDialog
                open={errorOpen}
                onClose={handleErrorClose}
                titleText={"Error creating invoice"}
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
