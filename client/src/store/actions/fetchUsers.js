import axiosWithAuth from '../utils/AxiosAuth';
import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './index';

export const getProjects = users => dispatch => {
  dispatch({type:FETCH_USERS_START});

  return axiosWithAuth()
    .get(`${process.env.REACT_APP_API_URL}/users`)
    .then(res => dispatch({type: FETCH_USERS_SUCCESS, payload: res.data}))
    .catch(e => dispatch({type: FETCH_USERS_FAILURE, payload: e.message}));
};