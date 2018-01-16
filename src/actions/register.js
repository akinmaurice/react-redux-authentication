// Import axios and React Cookie
import axios from 'axios';

// When Registration Is not Succesful
export function registrationHasErrored(bool) {
  return {
    type: 'REGISTRATION_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Action for when Login is in Progress
export function registrationIsLoading(bool) {
  return {
    type: 'REGISTRATION_IS_LOADING',
    isLoading: bool,
  };
}

// Action for When Data Fecth is Successful
export function registrationSuccess(bool) {
  return {
    type: 'REGISTRATION_SUCCESS',
    registration: bool,
  };
}

// Action to Fetch data from APi here
export function registrationFetchData() {
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
    dispatch(registrationIsLoading(true));
    // POST DATA to API HEre
    await axios.post('http://localhost:3001/user/register', postRequest)
      .then((response) => {
        dispatch(registrationIsLoading(false));
        // Get Reponse
        const apiResponse = response.data;
        // If response is not 200
        if (apiResponse.status !== 200) {
          return dispatch(registrationHasErrored(true));
        }
        // Dispatch User Authenticated Action
        return dispatch(registrationSuccess(true));
      })
      .catch((error) => {
        dispatch(registrationHasErrored(true));
      });
  };
}
