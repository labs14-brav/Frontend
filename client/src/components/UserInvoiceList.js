import React, { useState, useEffect }from 'react';
import axioswithAuth from '../helpers/axioswithAuth';
import UserInvoice from './UserInvoice';


function UserInvoiceList(props) {
    const [invoices, setInvoices] = useState([]);

    //grab invoices from server
    async function fetchInvoices() {
        let res = await axioswithAuth().get(`invoices/case/${props.case.id}`)
        setInvoices(res.data);
    }

    useEffect(() => {
        fetchInvoices();
    }, [])

    return(
        <>
        {
            invoices.length < 1 ? <div>You have no invoices waiting currently.</div> :
        invoices.invoice.map(element => {
            return <UserInvoice key={element.id} invoice={element} mediator={invoices.mediator}/>})
        }
        </>
    )
}

export default UserInvoiceList;