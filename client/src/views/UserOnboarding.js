import React, { useEffect, useState } from "react";
import {
    Card,
    Divider,
    TextField,
    Button
} from "@material-ui/core";
import { signupWithGoogle } from "../store/actions/Auth";
import { connect } from "react-redux";
import useStyles from "./styles/_auth.js"

function Onboarding(props) {
    const classes = useStyles();
    const [signupMethod, setSignupMethod] = useState(null);

    const [user, setUser] = useState({
        name: "",
        city: "",
        state: "",
        languages: "",
        professional_bio: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    };

    return (
        <div className={classes.container}>
            <Card className={classes.cardStep2}>
                <img className={classes.logo} src={require("../images/bravlogo.png")}></img>
                <p>Tell us about yourself!</p>
                <Divider variant="middle" />
                <form className={classes.loginForm} onSubmit={signupMethod === "email" ? handleSignupWithEmail : handleSignupWithGoogle}>
                    <TextField
                        className={classes.formInput}
                        label="Full Name"
                        name="name"
                        margin="normal"
                        variant="outlined"
                        onChange={onChangeUserInfo}
                    />
                    <div className={classes.locationContainer}>
                        <TextField
                            className={classes.formInput}
                            label="City"
                            name="city"
                            margin="normal"
                            variant="outlined"
                            onChange={onChangeUserInfo}
                        />
                        <TextField
                            className={classes.formInput}
                            label="State"
                            name="state"
                            margin="normal"
                            variant="outlined"
                            onChange={onChangeUserInfo}

                        />
                    </div>
                    <TextField
                        className={classes.formInput}
                        label="Languages"
                        name="languages"
                        margin="normal"
                        variant="outlined"
                        onChange={onChangeUserInfo}

                    />

                    <TextField
                        multiline
                        className={classes.formInput}
                        label="Bio"
                        name="bio"
                        margin="normal"
                        variant="outlined"
                        onChange={onChangeUserInfo}

                    />

                    <Button type="submit" className={classes.button}>Signup</Button>
                </form>
                <Button onClick={() => setSignupMethod(null)} className={classes.bottomTextStep2}>Go Back</Button>
            </Card>
        </div>
    );
}

export default connect(null, { signupWithGoogle })(Onboarding);
