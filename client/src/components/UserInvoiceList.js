import React, { useState, useEffect }from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import UserInvoice from './UserInvoice';


function UserInvoiceList(props) {
    const [invoices, setInvoices] = useState([1, 2, 3]);
    console.log('UserInvoiceList');

    //grab invoices from server
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`/case/${props.case.id}`)
        setInvoices(res.data);
    }

    return(
        <>
        {
            invoices.length < 1 ? <div>You have no invoices waiting currently.</div> :
        invoices.map(invoice => {
            return <UserInvoice key={invoice.id} invoice={invoice} />})
        }
        </>
    )
}

export default UserInvoiceList;