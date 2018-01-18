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

// Post Error Handler
export function postErrorMessage(string) {
  return {
    type: 'POST_ERROR_MESSAGE',
    postErrorMessage: string,
  };
}

// Action for when Data Fetch is in Progress
export function newPostSuccess(bool) {
  return {
    type: 'NEW_POST_SUCCESS',
    newPostSuccess: bool,
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
    dispatch(newPostSuccess(false));
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

// Action to Create New Todo
export function newTodoFetchData(newTodo) {
  // Get Token From Storage
  const token = localStorage.getItem('token');
  // Post Body Here
  const body = newTodo;
  const postRequest = {
    headers: {
      authorization: token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  // Dispatch Loading Status to Component
  return async (dispatch) => {
    // Reset all Actions so state goes back to default
    dispatch(postHasErrored(false));
    dispatch(postErrorMessage(''));
    // Set State to Loading
    dispatch(postIsLoading(true));
    // POST DATA to API HEre
    await axios.post('http://localhost:3001/todo/createTodo', body, postRequest)
      .then((response) => {
        dispatch(postIsLoading(false));
        // Get Reponse
        const apiResponse = response.data;
        console.log(apiResponse);
        // If response is not 200
        if (apiResponse.status !== 200) {
          dispatch(postHasErrored(true));
          dispatch(postErrorMessage(apiResponse.message));
        } else if (apiResponse.status === 200) {
        // Dispatch Action if successful
          const post = apiResponse.todo;
          dispatch(postFetchDataSuccess(post));
          dispatch(newPostSuccess(true));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(postHasErrored(true));
      });
  };
}

// Set Post State to empty
export function resetPostState() {
  return (dispatch) => {
    dispatch(postHasErrored(false));
    dispatch(postErrorMessage(''));
    dispatch(postFetchDataSuccess({}));
    dispatch(newPostSuccess(false));
  };
}
