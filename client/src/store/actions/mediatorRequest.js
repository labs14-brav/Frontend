import axiosWithAuth from '../../helpers/axioswithAuth'
import {
  MEDIATOR_REQUEST_START,
  MEDIATOR_REQUEST_SUCCESS,
  MEDIATOR_REQUEST_FAILURE
} from './index';

export const mediatorRequest = id => dispatch => {
  dispatch({type:MEDIATOR_REQUEST_START});

  return axiosWithAuth()
  .put(`${process.env.REACT_APP_API_URL}/users/${id}/mediator-upgrade`)
    .then(res => dispatch({type: MEDIATOR_REQUEST_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: MEDIATOR_REQUEST_FAILURE, payload: e.message}));
};