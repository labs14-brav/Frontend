import {combineReducers} from 'redux';
import {fetchUsersReducer} from './fetchUsersReducer'
import {mediatorRequestReducer} from './mediatorRequestReducer'
import {fetchMediatorsReducer} from './fetchMediatorsReducer'


export default combineReducers({
fetchUsersReducer,
mediatorRequestReducer,
fetchMediatorsReducer
})