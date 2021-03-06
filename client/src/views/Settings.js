import React, { useState, useEffect } from "react";
import { DeactivateAccountButton } from "../components/index";
import { Link } from "react-router-dom";
import { Card, TextField, Button } from "@material-ui/core";
import { BecomeMediatorLink } from "./styles/index";
import useStyles from "./styles/_settings.js";
import { profileImageRef } from "../helpers/firebase";
import { connect } from 'react-redux';
import { fetchUser, updateUser } from '../store/actions/Auth';

function Settings(props) {
    const classes = useStyles();
    const [fileUpload, setfileUpload] = useState(React.createRef());
    const [fileSubmitButton, setfileSubmitButton] = useState(React.createRef());
    const [profileImage, setProfileImage] = useState({});
    const fileRef = profileImageRef.child(`${props.user.id}/profile-image`);
    const [inputs, setInputs] = useState({
        name: props.user.name,
        professional_bio: props.user.professional_bio,
        language: props.user.language,
        city: props.user.city,
        state: props.user.state,
    });

    const [updatingInfo, setUpdatingInfo] = useState(false);
    const userType = localStorage.getItem("type");

    const handleSubmit = () => {
        props.updateUser(props.user.id, inputs);
        setUpdatingInfo(false);
    };

    const handleChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    function fetchUserProfileImage() {
        fileRef
            .getDownloadURL()
            .then(url => {
                props.updateUser(props.user.id, { profile_image: url })
            })
            .catch(err => {
                console.error(err);
            });
    }

    const handleImageSelect = e => {
        e.preventDefault();
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        if (file && file.size > 1e8) {
            alert("File is too large. Maximum limit is 100MB.");
            e.target.value = "";
        } else {
            fileRef
                .put(file)
                .then(snapshot => {
                    console.log(snapshot)
                    fetchUserProfileImage();
                })
                .catch(err => {
                    console.error(err);
                });
        }
    };

    return (
        <div className={classes.container}>
            <Card className={classes.profile}>
                <div className={classes.profileTextContainer}>
                    <h3>{props.user.name}</h3>
                    <p className={classes.profileText}>{props.user.email}</p>
                    <p className={classes.profileText}>{`${props.user.city}, ${props.user.state}`}</p>
                    <p className={classes.profileText}>{props.user.professional_bio}</p>
                </div>

                <div className={classes.profileImageContainer} style={{ position: "relative" }}>
                    <img
                        id="profile-image"
                        onClick={() => fileUpload.current.click()}
                        className={classes.profileImage}
                        src={props.user.profile_image ? props.user.profile_image : require('../images/avatar-1577909_960_720.png')}
                    />
                    <Button className={classes.editButton} onClick={() => fileUpload.current.click()}>Edit</Button>

                    <input
                        onChange={handleImageSelect}
                        style={{ display: "none" }}
                        required
                        ref={fileUpload}
                        id="uploader"
                        type="file"
                        accept="image/*,{}.pdf,.doc"
                    />
                </div>
            </Card>

            <div className={classes.sectionTitleContainer}>
                <h3 className={classes.sectionTitle}>Profile</h3>
                <p>Your personal information</p>
            </div>

            <Card className={classes.editProfileCard}>
                <div className={classes.cardTitle}>
                    <strong>User Profile</strong>
                    <div className={classes.divider}> </div>
                </div>
                {!updatingInfo ? (
                    <div className={classes.staticInfoContainer}>
                        <table className={classes.staticInfo}>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>Name: </td>
                                <td className={classes.fieldValue}>{props.user.name}</td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>City: </td>
                                <td className={classes.fieldValue}>{props.user.language}</td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>Language: </td>
                                <td className={classes.fieldValue}>{props.user.city}</td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>State: </td>
                                <td className={classes.fieldValue}>{props.user.state}</td>
                            </tr>
                            <tr className={classes.fieldContainer}>
                                <td className={classes.fieldLabel}>Bio: </td>
                                <td className={classes.fieldValue}>{props.user.professional_bio}</td>
                            </tr>
                        </table>
                        <Button className={classes.updateButton} onClick={() => setUpdatingInfo(true)}>
                            Update Profile
                        </Button>
                    </div>
                ) : (
                        <div className={classes.staticInfoContainer}>
                            <div className={classes.textFieldsContainer}>
                                <tr className={classes.inputFieldContainer}>
                                    <div className={classes.inputFieldLabel}>Name</div>
                                    <td className={classes.inputField}>
                                        <TextField
                                            name="name"
                                            onChange={handleChange}
                                            value={inputs.name}
                                            variant="outlined"
                                            className={classes.inputField} />
                                    </td>
                                </tr>
                                <tr className={classes.inputFieldContainer}>
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
                                <tr className={classes.inputFieldContainer}>
                                    <td className={classes.inputFieldLabel}>City</td>
                                    <td className={classes.inputField}>
                                        <TextField
                                            name="city"
                                            onChange={handleChange}
                                            value={inputs.city}
                                            variant="outlined"
                                            className={classes.inputField} />
                                    </td>
                                </tr>
                                <tr className={classes.inputFieldContainer}>
                                    <td className={classes.inputFieldLabel}>State</td>
                                    <td className={classes.inputField}>
                                        <TextField
                                            name="state"
                                            onChange={handleChange}
                                            value={inputs.state}
                                            variant="outlined"
                                            className={classes.inputField} />
                                    </td>
                                </tr>
                                <tr className={classes.inputFieldContainer}>
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
                                <Button className={classes.saveButton} onClick={handleSubmit}>Save</Button>
                                <Button className={classes.cancelButton} onClick={() => setUpdatingInfo(false)}>Cancel</Button>
                            </div>
                        </div>
                    )}
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
                                Are you a certified mediator? Join the Brāv platform! Upon
                                approval by one of our admins, you will be able to market your
                                services as a mediator directly to our users, and be paid
                                through the app! Click below to submit your application!</p>
                            <Link className={classes.link} to="/users/mediator-registration">
                                <BecomeMediatorLink>Become a Mediator</BecomeMediatorLink>
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
                            If you deactivate your account you will lose access to our
                            services. A record of your cases will be stored as stated in the
                            agreement. Click below if you are sure to continue.</p>
                        <DeactivateAccountButton />
                    </div>
                </Card>
            </section>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapStateToProps, { fetchUser, updateUser })(Settings);
