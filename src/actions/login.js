// Import axios
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
        console.log(response.data);
        const user = response.data;
        dispatch(loginSuccess(user));
        // Save Token to Storage
        // Redirect User to the Home Page
        window.location.href = `${CLIENT_ROOT_URL}/`;
      })
      .catch((error) => {
        dispatch(loginHasErrored(true));
      });
  };
}
