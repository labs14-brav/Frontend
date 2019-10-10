import React, { useState } from "react";
import {
    Card,
    Divider,
    TextField,
    Button,
    Checkbox
} from "@material-ui/core";
import { fetchUser } from "../store/actions/Auth";
import { connect } from "react-redux";
import axioswithAuth from "../helpers/axioswithAuth";
import useStyles from "./styles/_auth.js"

function Onboarding(props) {
    const classes = useStyles();
    const [signupMethod, setSignupMethod] = useState(null);

    const [userInfo, setUserInfo] = useState({
        name: "",
        city: "",
        state: "",
        language: "",
        professional_bio: "",
        type: "user",
        is_onboarded: true
    });

    const onChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axioswithAuth()
            .put(`/users/${props.user.id}/update-user`, userInfo)
            .then(res => {
                props.fetchUser(props.user.id);
                props.history.push("/cases");
            })
            .catch(error => {
                console.error(error);
            })
    };

    const handleCheckbox = () => {
        userInfo.type === "user" ? setUserInfo({ ...userInfo, type: "mediator" }
        ) : setUserInfo({ ...userInfo, type: "user" });
    }

    return (
        <div className={classes.container}>
            <Card className={classes.cardStep2}>
                <img className={classes.logo} src={require("../images/brav-logo.png")}></img>
                <p>Tell us about yourself!</p>
                <Divider variant="middle" />
                <form className={classes.loginForm} onSubmit={handleSubmit}>
                    <div className={classes.checkboxContainer}>
                        <p className={classes.checkboxText} >Register as mediator</p>
                        <Checkbox
                            checked={userInfo.type === "mediator"}
                            onChange={handleCheckbox}
                            value="checkedB"
                            color="primary"
                            inputProps={{
                                'aria-label': 'secondary checkbox',
                            }}
                        />
                    </div>
                    <TextField
                        className={classes.formInput}
                        label="Full Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        onChange={onChange}
                    />
                    <div className={classes.locationContainer}>
                        <TextField
                            className={classes.formInput}
                            label="City"
                            name="city"
                            margin="normal"
                            variant="outlined"
                            onChange={onChange}
                        />
                        <TextField
                            className={classes.formInput}
                            label="State"
                            name="state"
                            margin="normal"
                            variant="outlined"
                            onChange={onChange}

                        />
                    </div>
                    <TextField
                        className={classes.formInput}
                        label="Languages"
                        name="language"
                        margin="normal"
                        variant="outlined"
                        onChange={onChange}

                    />

                    <TextField
                        multiline
                        className={classes.formInput}
                        label="Bio"
                        name="professional_bio"
                        margin="normal"
                        variant="outlined"
                        onChange={onChange}

                    />

                    <Button type="submit" className={classes.button}>Continue</Button>
                </form>
                {/* <Button onClick={() => setSignupMethod(null)} className={classes.bottomTextStep2}>Go Back</Button> */}
            </Card>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, { fetchUser })(Onboarding);
