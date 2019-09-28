import { AUTH_START, AUTH_SUCCESS, AUTH_FAILURE, CHECKING_USER, USER, NO_USER, GOT_USER_INFO, SIGN_OUT } from "../actions";

const initialState = {
  user: false,
  started: false,
  finished: false,
  error: null,
  user: null,
};

export const authReducer = (state = initialState, action) => {
  const errorMessage = ""
  switch (action.type) {
    case AUTH_START:
      return { ...state, started: true };
    case AUTH_SUCCESS:
      return { ...state, finished: true, started: false, error: null, user: { ...state.user, ...action.payload } };
    case AUTH_FAILURE:
      return { ...state, error: errorMessage, started: false };
    case CHECKING_USER:
      return { started: true };
    case GOT_USER_INFO:
      return { ...state, user: { ...state.user, token: action.payload } };
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
