import { combineReducers } from "redux";
import { fetchUsersReducer } from "./fetchUsersReducer";
import { mediatorRequestReducer } from "./mediatorRequestReducer";
import { fetchMediatorsReducer } from "./fetchMediatorsReducer";
import { authReducer } from "./AuthReducer";

export default combineReducers({
  fetchUsersReducer,
  mediatorRequestReducer,
  fetchMediatorsReducer,
  authReducer
});
