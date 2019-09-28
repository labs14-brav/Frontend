import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, CHECKING_USER, SIGN_OUT } from "./index";
import axios from "../../helpers/axioswithAuth";
import { mixpanel } from "../../helpers/index";
import Firebase from "../../helpers/firebase";

const URL = process.env.REACT_APP_API_URL;
const environment = process.env.NODE_ENV;

export const checkingUser = () => dispatch => {
  dispatch({ type: CHECKING_USER });
};

export const loggedIn = (user) => dispatch => {
  dispatch({ type: "GOT_USER_INFO", payload: user.ra });
  localStorage.setItem("token", user.ra);
  axios()
    .post(`/users/auth`, user.ra)
    .then(res => {
      console.log(res.data, "user data that needs to be set to app state");
      const userID = res.data.id;
      const type = res.data.type;
      localStorage.setItem("type", type);
      localStorage.setItem("id", userID);
      localStorage.setItem("is_stripe_connected", res.data.is_stripe_connected);
      dispatch({ type: AUTH_SUCCESS, payload: res.data });
      if (type === "mediator") {
        if (environment === "production") {
          mixpanel.track("Mediator sign in", {
            distinct_id: userID
          });
        }
        return "/mediator-cases";
      } else if (type === "admin") {
        if (environment === "production") {
          mixpanel.track("Admin sign in", {
            distinct_id: userID
          });
        }
        return "/admin";
      } else {
        if (environment === "production") {
          mixpanel.track("User sign in", {
            distinct_id: userID
          });
        }
        return "/cases";
      }
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: AUTH_FAILURE });
      return "/users/login";
    });
};

export const loggedOut = () => dispatch => {
  dispatch({ type: SIGN_OUT });
};

export const signupWithGoogle = () => {
  Firebase.signInWithGoogle();
}

export const signOut = () => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signOut()
    .then(() => {
      dispatch({ type: AUTH_SUCCESS });
    }).catch(() => {
      dispatch({ type: AUTH_FAILURE });
    })
}
