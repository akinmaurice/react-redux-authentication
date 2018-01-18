import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { post, postHasErrored, postIsLoading, postErrorMessge, newPostSuccess } from './post';
import { user, loginHasErrored, loginIsLoading, loginErrorMessage, authenticated } from './login';
import { registrationSuccess, registrationIsLoading, registrationErrorMessage, registrationHasErrored } from './register';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  post,
  postHasErrored,
  postIsLoading,
  postErrorMessge,
  newPostSuccess,
  user,
  loginHasErrored,
  loginIsLoading,
  loginErrorMessage,
  authenticated,
  registrationSuccess,
  registrationIsLoading,
  registrationErrorMessage,
  registrationHasErrored,
});

