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
    const [user, setUser] = useState({
        name: "",
        professional_bio: "",
        language: "",
        city: "",
        state: "",
    });
    const [inputs, setInputs] = useState({
        name: "",
        professional_bio: "",
        language: "",
        city: "",
        state: "",
    });
    const [updatingInfo, setUpdatingInfo] = useState(false);
    const userType = localStorage.getItem("type");
    const userId = localStorage.getItem("id");


    const fetchUser = () => {
        axioswithAuth()
            .get(`users/${userId}`)
            .then((res) => {
                setUser(res.data);
                setInputs(res.data);
                setUpdatingInfo(false);
            })
            .catch((err) => {
                console.error(err)
            })
    };

    useEffect(() => {
        setIsLoading(false);
        fetchUser();
    }, []);

    const handleSubmit = () => {
        axioswithAuth()
            .put(`/users/${userId}/update-user`, inputs)
            .then(res => {
                fetchUser();
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const cancelUserUpdate = (e) => {
        setUpdatingInfo(false);
    }

    if (isLoading) return <LinearProgress />

    return (
        <div className={classes.container}>
            <Card className={classes.profile} >
                <div>
                    <h3>{user.name}</h3>
                    <p className={classes.profileText}>{user.email}</p>
                    <p className={classes.profileText} >{`${user.city}, ${user.state}`}</p>
                    <p className={classes.profileText} >{user.professional_bio}</p>
                </div>
                {/* <img className={classes.profilePicture} src="https://images.unsplash.com/photo-1547841022-b558accc7ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
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
                            <tr className={classes.fieldContainer} >
                                <td className={classes.fieldLabel}>Bio: </td>
                                <td className={classes.fieldValue}>{user.professional_bio}</td>
                            </tr>
                        </table>
                        <Button className={classes.updateButton} onClick={() => setUpdatingInfo(true)}>Update Profile</Button>
                    </div>
                    :
                    <div className={classes.staticInfoContainer}>
                        <div className={classes.textFieldsContainer}>
                            <div className={classes.fieldContainer}>
                                <div className={classes.inputFieldLabel}>Name</div>
                                <td className={classes.inputField}>
                                    <TextField
                                        name="name"
                                        onChange={handleChange}
                                        value={inputs.name}
                                        variant="outlined"
                                        className={classes.inputField} />
                                </td>
                            </div>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.inputFieldLabel}>Language</td>
                                <td className={classes.inputField}>
                                    <TextField
                                        name="language"
                                        onChange={handleChange}
                                        value={inputs.language}
                                        variant="outlined"
                                        className={classes.inputField} />
                                </td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.inputFieldLabel}>City</td>
                                <td className={classes.inputField}><TextField
                                    name="city"
                                    onChange={handleChange}
                                    value={inputs.city}
                                    variant="outlined"
                                    className={classes.inputField} />
                                </td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.inputFieldLabel}>State</td>
                                <td className={classes.inputField}><TextField
                                    name="state"
                                    onChange={handleChange}
                                    value={inputs.state}
                                    variant="outlined"
                                    className={classes.inputField} />
                                </td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.inputFieldLabel}>Bio</td>
                                <td className={classes.inputField}>
                                    <TextField
                                        multiline
                                        rowsMax="4"
                                        name="professional_bio"
                                        onChange={handleChange}
                                        value={inputs.professional_bio}
                                        variant="outlined"
                                        className={classes.inputField} />
                                </td>
                            </tr>
                        </div>
                        <div className={classes.buttonContainer}>
                            <Button className={classes.updateButton} onClick={handleSubmit}>Save</Button>
                            <Button className={classes.updateButton} onClick={cancelUserUpdate}>Cancel</Button>
                        </div>
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
