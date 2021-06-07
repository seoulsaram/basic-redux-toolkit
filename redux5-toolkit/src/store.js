import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import reducer from './reducers/reducers';

//createStore함수의 인자 1. reducer, 2. initialState, 3.enhancer
const firstMiddleWare = (store) => (dispatch) => (action) => {
  console.log('로깅', action);
  //기능추가
  dispatch(action);
  //기능추가
  console.log('액션 끝');
};

//preloaddedState : initialState같은 것. 서버사이드 랜더링할 때 써주면 됨
//getDefaultMiddleware : 미들웨어를 넣어줄 때 이걸 사용하지 않으면, toolkit에서 기본으로 제공하는 미들웨어가 제외되어버리므로 사용함.
const store = configureStore({
  reducer,
  middleware: [firstMiddleWare, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
