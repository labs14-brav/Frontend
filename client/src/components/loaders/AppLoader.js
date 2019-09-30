import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import useStyles from "./styles/_appLoader";
import { connect } from "react-redux";

function AppLoader(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.user) {
      if (props.user.name === null) {
        props.history.push("/onboarding");
      } else {
        props.history.push("/cases");
      }
    } else {
      props.history.push("/");
    }
  }, [props.user]);

  return (
    <div className={classes.container}>
      <Loader type="Oval" color="#5C90C1" height={80} width={80} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(AppLoader));
