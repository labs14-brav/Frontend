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
    submitbutton: {
        justifyContent: 'center',
    },
    modal: {
        position: 'absolute',
        margin: '0 auto',
    },
    paper: {
        position: 'absolute',
        top: '25%',
        left: '40%',
        width: '25%',
        height: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 4),
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
      },
}))

function getModalStyle() {

}

const UserCaseCard = (props) => {
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [textState, setText] = useState('');
    console.log(props);
    const classes = useStyles();


    /**
     * Modal functions
     */
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    /**
     These two functions are for the text input in the modal
     */
    const submitPost = e => {
        e.preventDefault();
    }
    const handleChanges = e => {
        setText(e.target.value);
    }

    return(
        <>
        <Card> 
            <CardContent>
                <p> {props.case.name}</p>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="primary" className={classes.button}>
                    <Link style={{textDecoration:'none', color:'inherit'}}to="/cases/1/mediator-search"> Find a Mediator </Link>
                </Button>
                <Button onClick={handleOpen}>
                    Edit Case
                </Button>
            </CardActions>
        </Card>
        <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <form onSubmit={submitPost} className='modal-form'>
                 <textarea placeholder="Add Case Information..." 
                 onChange={handleChanges} 
                 value={textState}
                 className="modal-text" 
                 cols='50'
                 rows='15'/>
                     <Button variant="outlined" color="primary" className={classes.submitbutton}>
                         Submit
                     </Button>
                </form>
                </div>
        </Modal>
        </>
    )
}


        
export default UserCaseCard;