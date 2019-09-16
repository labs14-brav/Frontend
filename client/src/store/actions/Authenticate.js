import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "./index";
import axios from "axios";
import { mixpanel } from "../../helpers/index";

const URL = process.env.REACT_APP_API_URL;
const environment = process.env.NODE_ENV;

export const authenticateUser = requestData => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios
    .post(`${URL}/users/auth`, requestData)
    .then(res => {
      localStorage.setItem("type", res.data.type);
      localStorage.setItem("id", res.data.id);
      dispatch({ type: LOG_IN_SUCCESS });
      if (res.data.type === "mediator") {
        if (environment === "production") {
          mixpanel.track("Mediator sign in", {
            distinct_id: localStorage.getItem("id")
          });
        }

        window.location = "/mediator-cases";
      } else if (res.data.type === "admin") {
        if (environment === "production") {
          mixpanel.track("Admin sign in", {
            distinct_id: localStorage.getItem("id")
          });
        }

        window.location = "/admin";
      } else {
        if (environment === "production") {
          mixpanel.track("User sign in", {
            distinct_id: localStorage.getItem("id")
          });
        }

        window.location = "/cases";
      }
    })
    .catch(err => {
      console.error(err);
      dispatch({ type: LOG_IN_FAILURE });
    });
};
