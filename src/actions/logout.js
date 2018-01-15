export default function logoutUser() {
  localStorage.clear();
  return {
    type: 'UN_AUTHENTICATED',
  };
}
