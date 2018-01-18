import axios from 'axios';

// WHen Data Fetch Encounters an Error
export function postHasErrored(bool) {
  return {
    type: 'POST_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Action for when Data Fetch is in Progress
export function postIsLoading(bool) {
  return {
    type: 'POST_IS_LOADING',
    isLoading: bool,
  };
}


// Action for When Data Fecth is Successful
export function postFetchDataSuccess(post) {
  return {
    type: 'POST_FETCH_DATA_SUCCESS',
    post,
  };
}


// Action to Fetch each from API
export function postFetchData(slug) {
  const token = localStorage.getItem('token');
  const requestBody = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  };
  return async (dispatch) => {
    dispatch(postHasErrored(false));
    // Dispatch Loading Status to Component
    dispatch(postIsLoading(true));
    // Get Data from API
    await axios.get(`http://localhost:3001/todo/${slug}`, requestBody)
      .then((response) => {
        dispatch(postIsLoading(false));
        // Get Reponse
        const apiResponse = response.data;
        // Handle Error Response
        if (apiResponse.status !== 200) {
          return dispatch(postHasErrored(true));
        }
        const todoResponse = apiResponse.todo;
        const post = todoResponse[0];
        return dispatch(postFetchDataSuccess(post));
      })
      .catch(() => dispatch(postHasErrored(true)));
  };
}
