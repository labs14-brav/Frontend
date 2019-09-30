/**
 * Dependencies
 */

import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles/_navbar';
import { connect } from "react-redux";
import { signOut } from "../store/actions/Auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faEdit, faComments } from '@fortawesome/free-solid-svg-icons';

/**
 *  Import styles
 */

import './styles/UserCaseCard.scss';

/**
 * Define component
 */

function NavBar(props) {
  const classes = useStyles();
  function logout() {
    localStorage.clear();
    props.signOut();
    props.history.push("/");
  }

  function checkType() {
    let type = localStorage.getItem("type");
    if (type === 'mediator') {
      return '/mediator-cases';
    } else {
      return '/cases';
    }
  }

  if (props.location.pathname === "/onboarding") {
    return null;
  } else {
    return props.user ? (
      <Grid container style={{ position: 'absolute', boxShadow: "5px 0px 8px #888888", overflow: "hidden" }} className="navBarTop">
        <Grid item xs={4} sm={3} lg={2} className="bg-brav-secondary">
          <NavLink className={classes.bravLogoLink} to={checkType()} >
            <img className={classes.bravLionLogo} src="https://firebasestorage.googleapis.com/v0/b/brav-3077e.appspot.com/o/brav-lion-logo.png?alt=media&token=4a50279b-acdf-4f74-b2ce-2b8916721331" alt="brav logo" />
            <h1 className="bravHeader">Brāv</h1>
          </NavLink>
        </Grid>

        <Grid item xs={8} sm={9} lg={10} >
          <nav>
            <Toolbar className="bg-white" className={classes.navbar}>
              <span style={{ flexGrow: 1 }}></span>
              <NavLink className={classes.commentsNavLink} activeClassName="activeNavButton" to={'/users/messaging'} ><Button>
                <FontAwesomeIcon size="3x" icon={faComments} className={classes.icon} />
              </Button></NavLink>

              <NavLink className={classes.navLink} activeClassName="activeNavButton" to={checkType()} ><Button>
                <FontAwesomeIcon size="3x" icon={faEdit} className={classes.icon} />
              </Button></NavLink>

              <NavLink className={classes.navLink} activeClassName="activeNavButton" to="/users/settings" ><Button><FontAwesomeIcon size="3x" icon={faCog} className={classes.icon} /></Button></NavLink>
              <Button onClick={logout}><FontAwesomeIcon size="3x" icon={faSignOutAlt} className={classes.icon} /></Button>
            </Toolbar>
          </nav>
        </Grid>
      </Grid >
    ) : null;
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user
  }
}

export default connect(mapStateToProps, { signOut })(withRouter(NavBar));
