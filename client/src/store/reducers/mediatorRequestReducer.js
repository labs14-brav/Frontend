import {
    MEDIATOR_REQUEST_START, 
    MEDIATOR_REQUEST_SUCCESS, 
    MEDIATOR_REQUEST_FAILURE
    } from '../actions';
    
    const initialState = {
      mediator: [],
      started: false,
      isCompleted: false,
      error: null
    };
    
    export const mediatorRequestReducer = (state = initialState, action) => {
      switch (action.type) {
        case MEDIATOR_REQUEST_START:
          return {
            ...state,
            mediator: [],
            started: true,
            isCompleted: false,
            error: null
          };
        case MEDIATOR_REQUEST_SUCCESS:
          return {
            ...state,
            meditaor: action.payload,
            started: false,
            isCompleted: true,
            error: null
          };
        case MEDIATOR_REQUEST_FAILURE:
          return {
            ...state,
            mediator: null,
            started: false,
            isCompleted: false,
            error: action.payload
          };
        default:
          return state;
      }
    };