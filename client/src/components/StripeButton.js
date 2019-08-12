import React, { useEffect } from "react";
// import { stripe } from "../helpers";

const stripe = window.Stripe(process.env.REACT_APP_STRIPE_KEY);

export default function StripeButton() {
    useEffect(() => {
        // const stripe = Stripe(process.env.REACT_APP_STRIPE_KEY);
        // export default stripe;
    });

    const clickHandler = () => {
        stripe
            .redirectToCheckout({
                sessionId:
                    "cs_test_Fs9EUq0sWkkqeUU1o4VsC9aLNWkmzEeek1zRjUrjcPtAEPb5f8LgwyEF"
            })
            .then(function(result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
                console.error("result", result);
            })
            .catch(function(err) {
                console.error("err", err);
            });
    };

    return <button onClick={clickHandler}>Checkout</button>;
}
