/**
 * Dependencies
 */

import React from 'react';
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
        return stripe.redirectToCheckout({
          sessionId: result.data.session.id
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
