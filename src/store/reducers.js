import { combineReducers } from 'redux';
import {TopByLikes_Received} from "./actions";

function topByLikes(state = [], action){
  switch (action.type) {
    case TopByLikes_Received:
      return action.top
    default:
      return state
  }

} 

const app = combineReducers({
  topByLikes,
})
export default app