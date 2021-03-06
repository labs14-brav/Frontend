import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  CHECKING_USER,
  USER,
  NO_USER,
  GOT_USER_INFO,
  SIGN_OUT,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../actions";

const initialState = {
  started: false,
  finished: false,
  isFetchingUser: false,
  isUpdatingUser: false,
  error: null,
  user: null
};

export const authReducer = (state = initialState, action) => {
  const errorMessage = "";
  switch (action.type) {
    case AUTH_START:
      return { ...state, started: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        finished: true,
        started: false,
        error: null,
        user: { ...state.user, ...action.payload }
      };
    case AUTH_FAILURE:
      return { ...state, error: errorMessage, started: false };
    case CHECKING_USER:
      return { started: true };
    case FETCH_USER_START:
      return { ...state, isFetchingUser: true };
    case FETCH_USER_SUCCESS:
      return { ...state, isFetchingUser: false, user: action.payload };
    case UPDATE_USER_START:
      return { ...state, isUpdatingUser: true };
    case UPDATE_USER_SUCCESS:
      return { ...state, isUpdatingUser: false, user: action.payload };
    case GOT_USER_INFO:
      return { ...state, user: { ...state.user, ...action.payload } };
    case USER:
      return { finished: false, error: null, started: false, user: true };
    case NO_USER:
      return { finished: false, error: null, started: false, user: null };
    case SIGN_OUT:
      return { finished: false, error: null, started: false, user: null };
    default:
      return state;
  }
};
