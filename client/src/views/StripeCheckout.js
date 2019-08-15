/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import axioswithAuth from "../helpers/axioswithAuth"

/**
 * Define view
 */

function StripeCheckout(props) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    async function sendInvoicePaidRequest() {
      axioswithAuth().put(
        `${process.env.REACT_APP_API_URL}/invoices/${props.match.params.id}`
      )
      setIsRedirecting(true)
    }
    sendInvoicePaidRequest()
  }, [])

  if (isRedirecting) {
    return <Redirect to="/cases" />
  }

  return (
    <div style={{ marginTop: "200px" }}>
      <Loader />
    </div>
  );
}

/**
 * Export view
 */

export default StripeCheckout;
