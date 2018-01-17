import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { user, loginHasErrored, loginIsLoading, loginErrorMessage, authenticated } from './login';
import { registrationSuccess, registrationIsLoading, registrationErrorMessage, registrationHasErrored } from './register';
import logoutUser from './logout';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  user,
  loginHasErrored,
  loginIsLoading,
  loginErrorMessage,
  authenticated,
  registrationSuccess,
  registrationIsLoading,
  registrationErrorMessage,
  registrationHasErrored,
  logoutUser,
});

