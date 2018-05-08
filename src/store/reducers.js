import { combineReducers } from 'redux';
import {TopByLikes_Request, TopByLikes_Received, TopByLikes_Failed} from "./actions";
import * as CONST from '../const.js';
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
      let extendedTop = action.top
        .map(x => Object.assign({}, x))
        .map(x => {
          x.postLink = `https://vk.com/${CONST.VK_GROUP_NAME}?w=wall${CONST.VK_GROUP_ID}_${x._id}`;
          x.signerLink = x.signer_id 
            ?  `https://vk.com/id${x.signer_id }`
            : null;
          return x})
      return Object.assign({}, state, {isFetching: false, isFailed: false, data: extendedTop})
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