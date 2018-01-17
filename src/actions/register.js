// Import axios and React Cookie
import axios from 'axios';

// When Registration Is not Succesful
export function registrationHasErrored(bool) {
  return {
    type: 'REGISTRATION_HAS_ERRORED',
    hasErrored: bool,
  };
}

// Action for when Registration is in Progress
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

// Registration Error Handler
export function registrationErrorMessage(string) {
  return {
    type: 'REGISTRATION_ERROR_MESSAGE',
    registrationErrorMessage: string,
  };
}


// Action to Fetch data from APi here
export function registrationFetchData(newUser) {
  // Post Body Here
  const postRequest = {
    method: 'POST',
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
    passwordConfirm: newUser.passwordConfirm,
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
          dispatch(registrationHasErrored(true));
          dispatch(registrationErrorMessage(apiResponse.message));
        }
        // Dispatch User Authenticated Action
        return dispatch(registrationSuccess(true));
      })
      .catch((error) => {
        dispatch(registrationHasErrored(true));
      });
  };
}
