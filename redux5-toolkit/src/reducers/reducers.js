import {combineReducers} from 'redux';
import {userSlice} from './user';
import {postSlice} from './post';
export default combineReducers({user: userSlice.reducer, posts: postSlice.reducer});

//slice : 리듀서, 초기스테이트, 액션 모두 들어있는 새로운 개념.
