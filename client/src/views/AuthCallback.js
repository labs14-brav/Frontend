/**
 * Dependencies
 */

import React from "react";
import firebase from "firebase";
import axios from "axios";
import { mixpanel } from "../helpers/index";

/**
 * Define view
 */

function AuthCallback(props) {
    firebase.auth().onAuthStateChanged(async user => {
        // User is signed in.
        if (user) {
            let token = await user.getIdToken();
            localStorage.setItem("token", token);

            axios
                .post(`${process.env.REACT_APP_API_URL}/users/auth`, {
                    user: user,
                    token: token
                })
                .then(res => {
                    localStorage.setItem("type", res.data.type);
                    localStorage.setItem("id", res.data.id);
                    if (res.data.type === "mediator") {
                        if (process.env.NODE_ENV === "production") {
                            mixpanel.track("Mediator sign in", {
                                distinct_id: localStorage.getItem("id")
                            });
                        }

                        window.location = "/mediator-cases";
                    } else if (res.data.type === "admin") {
                        if (process.env.NODE_ENV === "production") {
                            mixpanel.track("Admin sign in", {
                                distinct_id: localStorage.getItem("id")
                            });
                        }

                        window.location = "/admin";
                    } else {
                        if (process.env.NODE_ENV === "production") {
                            mixpanel.track("User sign in", {
                                distinct_id: localStorage.getItem("id")
                            });
                        }

                        window.location = "/cases";
                    }
                })
                .catch(err => {
                    console.error(err);
                    window.location = "/users/login";
                });
        } else {
            // User is signed out.
            window.location = "/users/login";
        }
    });

    return <div className="login" />;
}

/**
 * Export view
 */

export default AuthCallback;
