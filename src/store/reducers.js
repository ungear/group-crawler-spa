import { combineReducers } from 'redux';
import {TopByLikes_Request, TopByLikes_Received, TopByLikes_Failed} from "./actions";
/*
  topByLIkes:{
    isFetching: boolean,
    isFailed: boolean
    data: []
  }
*/
function topByLikes(state = {isFetching: false, isFailed: false, data: []}, action){
  switch (action.type) {
    case TopByLikes_Request:
      return Object.assign({}, state, {isFetching: true})
    case TopByLikes_Received:
      return Object.assign({}, state, {isFetching: false, isFailed: false, data: action.top})
    case TopByLikes_Failed:
      return Object.assign({}, state, {isFetching: false, isFailed: true, data: []})
    default:
      return state
  }

} 

const app = combineReducers({
  topByLikes,
})
export default app