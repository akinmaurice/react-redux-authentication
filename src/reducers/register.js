export function registrationHasErrored(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_HAS_ERRORED':
      return action.hasErrored;
    case 'REGISTRATION_REQUESTED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function registrationIsLoading(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_IS_LOADING':
      return action.isLoading;
    case 'REGISTRATION_REQUESTED':
      return action.isLoading;
    default:
      return state;
  }
}

export function registrationErrorMessage(state = '', action) {
  switch (action.type) {
    case 'REGISTRATION_ERROR_MESSAGE':
      return action.registrationErrorMessage;
    case 'REGISTRATION_REQUESTED':
      return action.registrationErrorMessage;
    default:
      return state;
  }
}

export function registrationSuccess(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return action.registrationSuccess;
    default:
      return state;
  }
}
