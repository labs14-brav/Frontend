/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import { DeactivateAccountButton } from "../components/index";
import { Link } from "react-router-dom";
import { makeStyles, Card, InputLabel, TextField, Button } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { BecomeMediatorLink } from "./styles/index";
import useStyles from "./styles/_settings.js";
import axioswithAuth from '../helpers/axioswithAuth';

/**
 * Define view
 */


function Settings() {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [updatingInfo, setUpdatingInfo] = useState(false);
    const userType = localStorage.getItem("type");
    const userId = localStorage.getItem("id");
    const [inputs, setInputs] = useState({
        name: "",
        professional_bio: "",
        language: "",
        city: "",
        state: "",
    });


    useEffect(() => {
        setIsLoading(false);
        axioswithAuth()
            .get(`users/${userId}`)
            .then((res) => {
                console.log(res);
                setUser(res.data);
            })
            .catch((err) => {
                console.error(err)
            })
    }, []);

    const handleSubmit = () => {
        const inputValues = Object.entries(inputs);
        const profileChanges = inputValues.filter((value) => value[1].length > 0);
        console.log(inputValues)
        const changesObject = {}
        profileChanges.forEach((value) => changesObject.value[0] = value[1]);
        console.log(changesObject);

        // axioswithAuth()
        //     .put(`/users/${userId}/update-user`, inputs)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    if (isLoading) return <LinearProgress />

    return (
        <div className={classes.container}>
            <Card className={classes.profile} >
                <div>
                    <h3>{user.name}</h3>
                    <p className={classes.profileText}>{user.email}</p>
                    <p className={classes.profileText} >{`Fluent in ${user.language}`}</p>
                    <p className={classes.profileText} >{`From ${user.city}, ${user.state}`}</p>
                    <p className={classes.profileText} >{user.professional_bio}</p>
                </div>
                <img className={classes.profilePicture} src="https://images.unsplash.com/photo-1547841022-b558accc7ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            </Card>

            <div className={classes.sectionTitleContainer} >
                <h3 className={classes.sectionTitle}>Profile</h3>
                <p>Your personal information</p>
            </div>

            <Card className={classes.editProfileCard}>
                <div className={classes.cardTitle}>
                    <strong>User Profile</strong>
                    <div className={classes.divider}> </div>
                </div>
                {!updatingInfo ?
                    <div className={classes.staticInfoContainer}>
                        <table className={classes.staticInfo} >
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>Name: </td>
                                <td className={classes.fieldValue} >{user.name}</td>
                            </tr>
                            <tr className={classes.fieldContainer} >
                                <td className={classes.fieldLabel}>Bio: </td>
                                <td className={classes.fieldValue}>{user.professional_bio}</td>
                            </tr>
                            <tr className={classes.fieldContainer} >
                                <td className={classes.fieldLabel}>City: </td>
                                <td className={classes.fieldValue}>{user.language}</td>

                            </tr>
                            <tr className={classes.fieldContainer} >
                                <td className={classes.fieldLabel}>Language: </td>
                                <td className={classes.fieldValue} >{user.city}</td>
                            </tr>
                            <tr className={classes.fieldContainer} >
                                <td className={classes.fieldLabel}>State: </td>
                                <td className={classes.fieldValue}>{user.state}</td>
                            </tr>
                        </table>
                        <Button className={classes.updateButton} onClick={() => setUpdatingInfo(true)}>Update Profile</Button>
                    </div>
                    :
                    <div className={classes.mainCardContent}>
                        <form className={classes.textFieldsContainer}>
                            <div className={classes.inputContainer}>
                                <InputLabel>Name</InputLabel>
                                <TextField
                                    name="name"
                                    onChange={handleChange}
                                    value={inputs.name}
                                    className={classes.textField}
                                    variant="outlined"
                                    placeholder={`${user.name}`} />
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel>Bio</InputLabel>
                                <TextField
                                    name="professional_bio"
                                    onChange={handleChange}
                                    value={inputs.professional_bio}
                                    className={classes.textField}
                                    variant="outlined"
                                    placeholder={`${user.professional_bio}`} />
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel>Language</InputLabel>
                                <TextField
                                    name="language"
                                    onChange={handleChange}
                                    value={inputs.language}
                                    className={classes.textField}
                                    variant="outlined"
                                    placeholder={`${user.language}`} />
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel>City</InputLabel>
                                <TextField
                                    name="city"
                                    onChange={handleChange}
                                    value={inputs.city}
                                    className={classes.textField}
                                    variant="outlined"
                                    placeholder={`${user.city}`} />
                            </div>
                            <div className={classes.inputContainer}>
                                <InputLabel>State</InputLabel>
                                <TextField
                                    name="state"
                                    onChange={handleChange}
                                    value={inputs.state}
                                    className={classes.textField}
                                    variant="outlined"
                                    placeholder={`${user.state}`} />
                            </div>
                        </form>
                        {/* <img src="https://images.unsplash.com/photo-1549920867-1629df28cdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" className={classes.profilePicture} /> */}
                        <Button className={classes.updateButton} onClick={handleSubmit}>Save</Button>
                    </div>
                }
            </Card>

            <section className={classes.cardContainer}>
                {userType === "mediator" ? null : (
                    <Card className={classes.card}>
                        <div className={classes.cardTitle}>
                            <strong>Become a mediator</strong>
                            <div className={classes.divider}> </div>
                        </div>
                        <div className={classes.cardContent}>
                            <p className={classes.text}>
                                Are you a certified mediator? Join the Brāv
                                platform! Upon approval by one of our admins,
                                you will be able to market your services as a
                                mediator directly to our users, and
                                be paid through the app! Click below to
                                submit your application!
                            </p>
                            <Link
                                className={classes.link}
                                to="/users/mediator-registration"
                            >
                                <BecomeMediatorLink>
                                    Become a Mediator
                                </BecomeMediatorLink>
                            </Link>
                        </div>
                    </Card>
                )}

                <Card className={classes.card}>
                    <div className={classes.cardTitle}>
                        <strong>Deactivate account</strong>
                        <div className={classes.divider}> </div>
                    </div>
                    <div className={classes.cardContent}>
                        <p className={classes.text}>
                            If you deactivate your account you will lose access
                            to our services. A record of your cases will be
                            stored as stated in the agreement. Click below if
                            you are sure to continue.
                        </p>
                        <DeactivateAccountButton />
                    </div>
                </Card>
            </section>
        </div >
    );
}

/**
 * Export view
 */

export default Settings;
