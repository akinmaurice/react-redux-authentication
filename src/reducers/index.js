import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { user, loginHasErrored, loginIsLoading, authenticated } from './login';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  user,
  loginHasErrored,
  loginIsLoading,
  authenticated,
});

