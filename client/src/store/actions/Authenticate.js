import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./index";
import axios from "axios";
import { mixpanel } from "../../helpers/index";

const URL = process.env.REACT_APP_API_URL;
const environment = process.env.NODE_ENV;

export const authenticateUser = requestData => dispatch => {
  dispatch({ type: LOG_IN_START });
  return axios
    .post(`${URL}/users/auth`, requestData)
    .then(res => {
      console.log(res.data);
      const userID = res.data.id;
      const type = res.data.type;
      localStorage.setItem("type", type);
      localStorage.setItem("id", userID);
      localStorage.setItem("is_stripe_connected", res.data.is_stripe_connected);
      dispatch({ type: LOG_IN_SUCCESS });
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
      dispatch({ type: LOG_IN_FAILURE });
      return "/users/login";
    });
};
