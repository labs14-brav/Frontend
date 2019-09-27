import React from 'react';
import Loader from 'react-loader-spinner';
import useStyles from './styles/_appLoader';
import { Card } from '@material-ui/core';

export default function () {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.loaderCard}>
                <Loader type="Oval" color="#5C90C1" height={80} width={80} />
            </Card>
        </div>
    )
}
