import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


function UserInvoice(props) {
    console.log(props);

    return(
        <Card>
            <CardContent>
                Yo!
            </CardContent>
            <CardActions>
                What's Good?
            </CardActions>
        </Card>
    )
}

export default UserInvoice;