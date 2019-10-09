import React, { useState } from "react";
import {
    Card,
    Divider,
    TextField,
    Button
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

    return (
        <div className={classes.container}>
            <Card className={classes.cardStep2}>
                <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
                <p>Tell us about yourself!</p>
                <Divider variant="middle" />
                <form className={classes.loginForm} onSubmit={handleSubmit}>
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

                    <Button type="submit" className={classes.button}>Signup</Button>
                </form>
                <Button onClick={() => setSignupMethod(null)} className={classes.bottomTextStep2}>Go Back</Button>
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
