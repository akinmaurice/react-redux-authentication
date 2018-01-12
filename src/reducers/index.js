import { combineReducers } from 'redux';
import { posts, postsHasErrored, postsIsLoading } from './posts';

const rootReducer = combineReducers({ posts, postsHasErrored, postsIsLoading });

export default rootReducer;
