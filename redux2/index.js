const {createStore, compose, applyMiddleware} = require('redux');
const addPost = require('./actions/post');
const {logIn, logOut} = require('./actions/user');
const reducer = require('./reducers/reducers');

const initialState = {
  user: {isLoggingIn: true, data: null},
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
  //액션을 함수로 둘 수도 있음(썽크에서는).
  //액션은 기본적으로 동기이며, 오브젝트인데
  //액션을 비동기이고 함수로 사용할 수도 있음.
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
    //이게 어디로 전달되냐면 action으로 전달되는것임.
  }
  return dispatch(action);
};
const enhancer = compose(applyMiddleware(firstMiddleWare, thunkMiddleware));
//compose : 합성하는 함수 (applyMiddleware만 쓸거면 compose안 넣어도 됨)
const store = createStore(reducer, initialState, enhancer);

store.dispatch(logIn({id: 1, name: 'gayeon'}));
// console.log(store.getState());
// store.dispatch(addPost({title: '첫번째 글', content: '오늘 날씨 맑고 좋았다!'}));
// console.log(store.getState());
// store.dispatch(logOut());
// console.log(store.getState());
