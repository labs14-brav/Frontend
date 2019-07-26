import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
      },
}))

function getModalStyle() {

}

const UserCaseCard = (props) => {
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    console.log(props);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const submitPost = e => {
        e.preventDefault();
    }
    
    const handleChanges = e => {
        
    }

    return(
        <>
        <Card> 
            <CardContent>
                <p> test </p>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" className={classes.button}>
                    <Link style={{textDecoration:'none', color:'inherit'}}to="/cases/1/mediator-search"> Find a Mediator </Link>
                </Button>
                <Button onClick={handleOpen}>
                    Add information
                </Button>
            </CardActions>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <form onSubmit={submitPost}>
                 <textarea placeholder="Add Information" onChange={handleChanges}>
                     </textarea>    
                     <button>
                         Submit
                     </button>
                </form>
               
                </div>
        </Modal>
        </>
    )
}


        
export default UserCaseCard;