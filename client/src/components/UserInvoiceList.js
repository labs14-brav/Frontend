import React, { useState, useEffect }from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import UserInvoice from './UserInvoice';


function UserInvoiceList(props) {
    const [invoices, setInvoices] = useState([]);

    //grab invoices
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`/case/${props.case.id}`)
        setInvoices(res.data);
    }

    return(
        <>
        {invoices.map(invoice => {
            return <UserInvoice key={invoice.id} invoice={invoice} />
        })}
        </>
    )
}