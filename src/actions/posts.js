import axios from 'axios';

// WHen Data Fetch Encounters an Error
export function postsHasErrored(bool) {
  return {
    type: 'POSTS_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Action for when Data Fetch is in Progress
export function postsIsLoading(bool) {
  return {
    type: 'POSTS_IS_LOADING',
    isLoading: bool,
  };
}

// Action for When Data Fecth is Successful
export function postsFetchDataSuccess(posts) {
  return {
    type: 'POSTS_FETCH_DATA_SUCCESS',
    posts,
  };
}


// Action to Fetch all Todos from API
export function postsFetchData() {
  const token = localStorage.getItem('token');
  const requestBody = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
  };
  return async (dispatch) => {
    dispatch(postsHasErrored(false));
    // Dispatch Loading Status to Component
    dispatch(postsIsLoading(true));
    // Get Data from API
    await axios.get('https://akin-react-auth-api.herokuapp.com/todos', requestBody)
      .then((response) => {
        dispatch(postsIsLoading(false));
        // Get Reponse
        const apiResponse = response.data;
        // Handle Error Response
        if (apiResponse.status !== 200) {
          return dispatch(postsHasErrored(true));
        }
        const posts = apiResponse.todos;
        return dispatch(postsFetchDataSuccess(posts));
      })
      .catch(() => dispatch(postsHasErrored(true)));
  };
}
