export function postHasErrored(state = false, action) {
  switch (action.type) {
    case 'POST_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function postIsLoading(state = false, action) {
  switch (action.type) {
    case 'POST_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}


export function post(state = {}, action) {
  switch (action.type) {
    case 'POST_FETCH_DATA_SUCCESS':
      return action.post;
    default:
      return state;
  }
}

export function postErrorMessge(state = '', action) {
  switch (action.type) {
    case 'POST_ERROR_MESSAGE':
      return action.postErrorMessage;
    default:
      return state;
  }
}

export function newPostSuccess(state = false, action) {
  switch (action.type) {
    case 'NEW_POST_SUCCESS':
      return action.newPostSuccess;
    default:
      return state;
  }
}
