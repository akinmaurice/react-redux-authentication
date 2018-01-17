// Import axios and React Cookie
import axios from 'axios';

// When Login Is not Succesful
export function loginHasErrored(bool) {
  return {
    type: 'LOGIN_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Action for when Login is in Progress
export function loginIsLoading(bool) {
  return {
    type: 'LOGIN_IS_LOADING',
    isLoading: bool,
  };
}

// Login Error Handler
export function loginErrorMessage(string) {
  return {
    type: 'LOGIN_ERROR_MESSAGE',
    loginErrorMessage: string,
  };
}


// Action for When Data Fecth is Successful
export function loginSuccess(user) {
  return {
    type: 'LOGIN_SUCCESS',
    user,
  };
}

// Authenticated Action
export function authenticated() {
  return {
    type: 'AUTHENTICATED',
    authenticated: true,
  };
}

// Action to Fetch data from APi here
export function loginFetchData(loginUser) {
  // Post Body Here
  const postRequest = {
    method: 'POST',
    email: loginUser.email,
    password: loginUser.password,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  // Dispatch Loading Status to Component
  return async (dispatch) => {
    dispatch(loginIsLoading(true));
    // Get Data From API HEre
    await axios.post('http://localhost:3001/user/login', postRequest)
      .then((response) => {
        dispatch(loginIsLoading(false));
        // Get Reponse
        const apiResponse = response.data;
        // If response is not 200
        if (apiResponse.status !== 200) {
          dispatch(loginHasErrored(true));
          dispatch(loginErrorMessage(apiResponse.message));
          return;
        }
        const user = apiResponse.userDetails;
        // Save Token to Storage
        localStorage.setItem('token', apiResponse.token);
        // Dispatch User Authenticated Action
        dispatch(loginSuccess(user));
        // Dispatch Authenticated Action
        dispatch(authenticated());
      })
      .catch((error) => {
        dispatch(loginHasErrored(true));
      });
  };
}
