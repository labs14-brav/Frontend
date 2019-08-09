import React, { useEffect } from "react";
import { stripe } from "../helpers";

export default function StripeButton() {
    useEffect(() => {
        // const stripe = Stripe(process.env.REACT_APP_STRIPE_KEY);
        // export default stripe;
    });

    const clickHandler = () => {
        stripe
            .redirectToCheckout({
                items: [
                    // Replace with the ID of your SKU
                    // { sku: "sku_123", quantity: 1 }
                ],
                successUrl: "https://example.com/success",
                cancelUrl: "https://example.com/cancel"
            })
            .then(function(result) {
                // If `redirectToCheckout` fails due to a browser or network
                // error, display the localized error message to your customer
                // using `result.error.message`.
            });
    };

    return <button onClick={clickHandler}>Checkout</button>;
}
