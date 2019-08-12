import React, { useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function StripeCallback() {
    useEffect(() => {
        const getCode = new URLSearchParams(window.location.search);
        const code = getCode.get("code");
        axios
            .post("https://connect.stripe.com/oauth/token", {
                client_secret: process.env.REACT_APP_STRIPE_KEY,
                code: code,
                grant_type: "authorization_code"
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
    });

    return (
        <div style={{ marginTop: "200px" }}>
            <Loader />
        </div>
    );
}
