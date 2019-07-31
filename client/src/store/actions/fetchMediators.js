import axiosWithAuth from '../../helpers/axioswithAuth'
import {
  FETCH_MEDIATORS_START,
  FETCH_MEDIATORS_SUCCESS,
  FETCH_MEDIATORS_FAILURE
} from './index';

export const fetchMediators = mediators => dispatch => {
  dispatch({type:FETCH_MEDIATORS_START});

  return axiosWithAuth()
  .get(`${process.env.REACT_APP_API_URL}/mediators`)
    .then(res => dispatch({type: FETCH_MEDIATORS_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: FETCH_MEDIATORS_FAILURE, payload: e.message}));
};