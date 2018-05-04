/*
 * action types
 */
export const TopByLikes_Request = "TopByLikes_Request";
export function requestTopByLikes(top) {
  return { type: TopByLikes_Request}
}

export const TopByLikes_Received = "TopByLikes_Received";
export function receiveTopByLikes(top) {
  return { type: TopByLikes_Received, top }
}

export const TopByLikes_Failed = "TopByLikes_Failed";
export function failTopByLikes(error) {
  return { type: TopByLikes_Failed, error }
}

export function getTopByLikes(){
  return dispatch => {
    dispatch(requestTopByLikes())
    return fetch('http://localhost:3008/api/getTopRecordsByLikes')
      .then(
        response => response.json(),
        error => {dispatch(failTopByLikes(error)); return Promise.reject()}
      )
      .then(
        json => dispatch(receiveTopByLikes(json)),
        _ => {}
      )
  }
}