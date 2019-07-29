import {
    FETCH_USERS_START, 
    FETCH_USERS_SUCCESS, 
    FETCH_USERS_FAILURE
  } from '../actions';
  
  const initialState = {
    users: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const fetchUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_START:
        return {
          ...state,
          users: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          users: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };