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
export function loginFetchData() {
  // Post Body Here
  const postRequest = {
    method: 'POST',
    email: 'akinyemi@gmail.com',
    password: 'Akin',
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
        const user = response.data.userDetails;
        // Save Token to Storage
        localStorage.setItem('token', response.data.token);
        // Dispatch User Authenticated Action
        dispatch(loginSuccess(user));
        // Dispatch Authenticated Action
        dispatch(authenticated());
        // Redirect User to the Home Page
        console.log('Ready to redirect Here');
      })
      .catch((error) => {
        dispatch(loginHasErrored(true));
      });
  };
}
