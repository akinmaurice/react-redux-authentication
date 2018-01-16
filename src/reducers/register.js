export function registrationHasErrored(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function registrationIsLoading(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function registrationSuccess(state = false, action) {
  switch (action.type) {
    case 'REGISTRATION_SUCCESS':
      return action.success;
    default:
      return state;
  }
}
