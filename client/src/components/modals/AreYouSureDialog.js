/**
 * Dependencies
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/**
 * Define styles
 */

const useStyles = makeStyles(theme => ({
    dialog: {
        width: '400px',
        margin: '0 auto',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    nobutton: {
        margin: '10px',
        color: '#E55557',
        borderColor: '#E55557',
    },
    yesbutton: {
        margin: '10px',
        color: '#5C90C1',
        borderColor: '#5C90C1',
    },
    title: {
        paddingBottom: '10px',
    },
    body: {
        paddingBottom: '20px',
    },
    buttondiv: {
        display: 'flex'
    }
}))

/**
 * Define modal
 */

function AreYouSureDialog(props) {
    const classes = useStyles();
    const { onClose, open} = props;

    function handleClose() {
        onClose(false);
    }

    function handleNo() {
        onClose(false);
    }

    function handleYes() {
        onClose(true)
    }
    return (
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <div className={classes.paper}>
            <Typography className={classes.body} variant ="subtitle2">Are you sure you want to delete this?</Typography>
                <div className={classes.buttondiv}>
                <Button onClick={handleYes} variant="outlined"className={classes.yesbutton}> Yes </Button>
                <Button onClick={handleNo} variant="outlined" className={classes.nobutton}> No </Button>
                </div>
            </div>
        </Dialog>
    )
}

/**
 * Export modal
 */

export default withRouter(AreYouSureDialog);
