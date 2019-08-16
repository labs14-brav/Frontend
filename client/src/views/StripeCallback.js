import React, { useEffect } from "react";
import axioswithAuth from "../helpers/axioswithAuth";
import Loader from "react-loader-spinner";

export default function StripeCallback(props) {
    useEffect(() => {
        const getCode = new URLSearchParams(window.location.search);
        const code = getCode.get("code");
        axioswithAuth()
            .post("/mediators/stripe-connect", { code: code })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            });
            window.location = '/mediator-cases'
    });

    return (
        <div style={{ marginTop: "200px" }}>
            <Loader />
        </div>
    );
}
