/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';

/**
 * Initialize stripe
 */

const stripe = window.Stripe(process.env.REACT_APP_STRIPE_KEY);

/**
 * Define component
 */

function StripeButton(props) {
  const clickHandler = () => {
    axioswithAuth().get(
      `${process.env.REACT_APP_API_URL}/invoices/${props.invoice_id}/session`
    ).then((result) => {
      if (result && result.data && result.data.session && result.data.session.id) {
        stripe.redirectToCheckout({
          sessionId: result.data.session.id
        }).then(function (checkout_result) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.

          // DEBUG this axios call never fires. Possible conflict with Stripe
          // redirecting to either success_url or cancel_url. MAYBE...
          axioswithAuth().put(
            `${process.env.REACT_APP_API_URL}/invoices/${props.invoice_id}`
          )
        }).catch(function (err) {
          console.error('STRIPE ERROR', err)
        })
      }
    }).catch((err) => {
      console.error(err)
    })
  };

  return <button onClick={clickHandler}>Checkout</button>;
}

/**
 * Export component
 */

export default StripeButton;
