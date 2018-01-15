export default function logoutUser(state = true, action) {
  switch (action.type) {
    case 'UN_AUTHENTICATED':
      return { authenticated: false, user: {} };
    default:
      return state;
  }
}
