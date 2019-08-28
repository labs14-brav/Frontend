/**
 * Dependencies
 */

import React, { useEffect } from "react";
import axioswithAuth from "../helpers/axioswithAuth";
import Loader from "react-loader-spinner";

/**
 * Export view
 */

export default function StripeCallback(props) {
    useEffect(() => {
        const getCode = new URLSearchParams(window.location.search);
        const code = getCode.get("code");

        axioswithAuth()
            .post("/mediators/stripe-connect", { code: code })
            .then(res => {
                console.log(res);
                localStorage.setItem('is_stripe_connected',true)
            })
            .catch(err => {
                console.error(err);
            });
            setTimeout(function(){
                window.location = '/mediator-cases'},4000)
    });

    return (
        <div style={{ marginTop: "200px" }}>
            <Loader />
        </div>
    );
}
