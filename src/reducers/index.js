import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';

export default combineReducers({ posts, postsHasErrored, postsIsLoading });

