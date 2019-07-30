import {
    FETCH_MEDIATORS_START, 
    FETCH_MEDIATORS_SUCCESS, 
    FETCH_MEDIATORS_FAILURE
  } from '../actions';
  
  const initialState = {
    mediators: [],
    started: false,
    isCompleted: false,
    error: null
  };
  
  export const fetchMediatorsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MEDIATORS_START:
        return {
          ...state,
          mediators: [],
          started: true,
          isCompleted: false,
          error: null
        };
      case FETCH_MEDIATORS_SUCCESS:
        return {
          ...state,
          mediators: action.payload,
          started: false,
          isCompleted: true,
          error: null
        };
      case FETCH_MEDIATORS_FAILURE:
        return {
          ...state,
          mediators: null,
          started: false,
          isCompleted: false,
          error: action.payload
        };
      default:
        return state;
    }
  };