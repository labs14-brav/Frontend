import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}))

const UserCaseCard = (props) => {
    const classes = useStyles();
    return(
        <>
        <Button variant="outlined" color="primary" className={classes.button}>
        <Link style={{textDecoration:'none', color:'inherit'}}to="/cases/1/mediator-search"> Find a Mediator </Link>
        </Button>
        </>
    )
}

export default UserCaseCard;