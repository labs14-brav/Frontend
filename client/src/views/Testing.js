/**
 * Dependencies
 */

import React from "react";
import StripeButton from "../components/StripeButton";

/**
 * Define view
 */

function Testing() {
  return (
    <div style={{marginTop: "100px"}}>
      <StripeButton invoice_id={1} />
    </div>
  )
}

/**
 * Export view
 */

export default Testing;
