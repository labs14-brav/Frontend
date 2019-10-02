import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  CHECKING_USER,
  SIGN_OUT,
  GOT_USER_INFO,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from "./index";
import axios from "../../helpers/axioswithAuth";
import { mixpanel } from "../../helpers/index";
import Firebase from "../../helpers/firebase";

const URL = process.env.REACT_APP_API_URL;
const environment = process.env.NODE_ENV;

export const checkingUser = () => dispatch => {
  dispatch({ type: CHECKING_USER });
};

export const loggedIn = (user) => dispatch => {
  localStorage.setItem("token", user.ra);
  console.log(user.photoURL);
  axios()
    .post(`/users/auth`, user.ra)
    .then(res => {
      const userID = res.data.id;
      const type = res.data.type;
      localStorage.setItem("type", type);
      localStorage.setItem("id", userID);
      localStorage.setItem("is_stripe_connected", res.data.is_stripe_connected);
      dispatch({ type: GOT_USER_INFO, payload: res.data });
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

export const signUpWithEmail = (email, password) => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signUpWithEmail(email, password)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
}

export const signInWithEmail = (email, password) => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signInWithEmail(email, password)
}

export const signUpWithGoogle = () => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signInWithGoogle()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err);
    })
}

export const signInWithGoogle = (user) => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signInWithGoogle();
}

export const signOut = () => dispatch => {
  dispatch({ type: AUTH_START });
  Firebase.signOut()
    .then(() => {
      localStorage.clear();
      dispatch({ type: SIGN_OUT });
    }).catch(() => {
      dispatch({ type: AUTH_FAILURE });
    })
}

export const fetchUser = userId => dispatch => {
  dispatch({ type: FETCH_USER_START });

  axios()
    .get(`users/${userId}`)
    .then((res) => {
      console.log(res);
      // dispatch({ type: FETCH_USER_SUCCESS });
    })
    .catch((err) => {
      console.error(err)
      // dispatch({ type: FETCH_USER_FAILURE });
    })
};