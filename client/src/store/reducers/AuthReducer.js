import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../actions";

const initialState = {
  loggedIn:
    localStorage.getItem("token") && localStorage.getItem("id") ? true : false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loggedIn: false,
        error: null
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        error: null
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loggedIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
