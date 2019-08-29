/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import UserInvoice from './UserInvoice';

/**
 * Define component
 */

function UserInvoiceList(props) {
    const [invoices, setInvoices] = useState([]);

    // Grab invoices from server
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`invoices/case/${props.case.id}`)
        setInvoices(res.data);
    }

    useEffect(() => {
        fetchInvoices();
    }, [])

    return(
        <>
        {invoices.length < 1 ? <div>You have no invoices waiting currently.</div> :
        invoices.invoice.map(element => {
            return <UserInvoice key={element.id} invoice={element} mediator={invoices.mediator} />})
        }
        </>
    )
}

/**
 *  Export component
 */

export default UserInvoiceList;