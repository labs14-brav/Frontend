/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Loader from "react-loader-spinner";
import axioswithAuth from "../helpers/axioswithAuth"
import mixpanel from "../helpers/mixpanel"

/**
 * Define view
 */

function StripeCheckout(props) {
  const [isRedirecting, setIsRedirecting] = useState(false)

  useEffect(() => {
    async function sendInvoicePaidRequest() {
      axioswithAuth().put(
        `${process.env.REACT_APP_API_URL}/invoices/${props.match.params.id}`
      ).then(res => {
        console.log("paid invoice: ", res.data)
        mixpanel.track("Paid invoice", {
          distinct_id: localStorage.getItem("id")
        });
        if (process.env.NODE_ENV === "production") {
          mixpanel.track("Paid invoice", {
            distinct_id: localStorage.getItem("id")
          });
        }
        setTimeout(() => {
          setIsRedirecting(true)
        }, 1000)
      }).catch(err => {
        console.error(err.response);
        setTimeout(() => {
          setIsRedirecting(true)
        }, 1000)
      })
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
