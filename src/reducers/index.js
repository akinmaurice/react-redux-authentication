import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';
import { user, loginHasErrored, loginIsLoading } from './login';

export default combineReducers({
  posts,
  postsHasErrored,
  postsIsLoading,
  user,
  loginHasErrored,
  loginIsLoading,
});

