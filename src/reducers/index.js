import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { user, loginHasErrored, loginIsLoading, authenticated } from './login';
import { registrationSuccess, registrationIsLoading, registrationHasErrored } from './register';
import logoutUser from './logout';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  user,
  loginHasErrored,
  loginIsLoading,
  authenticated,
  registrationSuccess,
  registrationIsLoading,
  registrationHasErrored,
  logoutUser,
});

