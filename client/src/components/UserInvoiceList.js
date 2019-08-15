import React, { useState, useEffect }from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import UserInvoice from './UserInvoice';


function UserInvoiceList(props) {
    const [invoices, setInvoices] = useState([]);
    console.log('UserInvoiceList');

    //grab invoices from server
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`invoices/case/${props.case.id}`)
        setInvoices(res.data);
    }

    useEffect(() => {
        fetchInvoices();
        console.log('Invoice List useEffect');
    }, [])

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