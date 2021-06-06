import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import addPost from './actions/post';
import {logIn, logOut} from './actions/user';
import reducer from './reducers/reducers';

const initialState = {
  user: {isLoggingIn: false, data: null},
  posts: [],
};

//createStore함수의 인자 1. reducer, 2. initialState, 3.enhancer
const firstMiddleWare = (store) => (dispatch) => (action) => {
  console.log('로깅', action);
  //기능추가
  dispatch(action);
  //기능추가
  console.log('액션 끝');
};
const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
    //이게 어디로 전달되냐면 action으로 전달되는것임.
  }
  return dispatch(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(firstMiddleWare, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleWare, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
