import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, CHECKING_USER } from "./index";
import axios from "../../helpers/axioswithAuth";
import { mixpanel } from "../../helpers/index";
import Firebase from "../../helpers/firebase";

const URL = process.env.REACT_APP_API_URL;
const environment = process.env.NODE_ENV;

export const checkingUser = () => dispatch => {
  console.log("checking user")
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
  console.log("<---- No user");

  dispatch({ type: CHECKING_USER });
};

export const signupWithGoogle = () => {
  Firebase.signInWithGoogle();
}

// export const authenticateUser = requestData => dispatch => {
//   dispatch({ type: AUTH_START });
//   return axios
//     .post(`${URL}/users/auth`, requestData)
//     .then(res => {
//       const userID = res.data.id;
//       const type = res.data.type;
//       localStorage.setItem("type", type);
//       localStorage.setItem("id", userID);
//       localStorage.setItem("is_stripe_connected", res.data.is_stripe_connected);
//       dispatch({ type: AUTH_SUCCESS });
//       if (type === "mediator") {
//         if (environment === "production") {
//           mixpanel.track("Mediator sign in", {
//             distinct_id: userID
//           });
//         }
//         return "/mediator-cases";
//       } else if (type === "admin") {
//         if (environment === "production") {
//           mixpanel.track("Admin sign in", {
//             distinct_id: userID
//           });
//         }
//         return "/admin";
//       } else {
//         if (environment === "production") {
//           mixpanel.track("User sign in", {
//             distinct_id: userID
//           });
//         }
//         return "/cases";
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       dispatch({ type: AUTH_FAILURE });
//       return "/users/login";
//     });
// };
