import { combineReducers } from 'redux';

function topByLikes(state = null, action){
  switch (action.type) {
    case 'setTopByLikes':
      return action.top
    default:
      return state
  }

} 

const app = combineReducers({
  topByLikes,
})
export default app