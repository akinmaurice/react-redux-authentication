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

// Action to Fetch data from APi here
export function postsFetchData() {
  // Dispatch Loading Status to Component
  return (dispatch) => {
    dispatch(postsIsLoading(true));
    // Get Data From API HEre
    fetch('http://localhost:3001/url/get')
      .then((response) => {
      // If no response from API
        if (!response.ok) {
          throw Error(response.statusText);
        }
        // Send Dispatch to Component since APi has Returned Data
        dispatch(postsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(posts =>
        dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(postsHasErrored(true)));
  };
}
