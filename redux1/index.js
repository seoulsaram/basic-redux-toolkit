const {createStore} = require('redux');

//reducer는 반드시 state를 리턴해야 한다. 에러가 났을 때도. 그래서 default에 state를 리턴한다.
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

//action 생성 함수들
const logIn = (data) => {
  return {
    //action
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  };
};

store.dispatch(logIn({id: 1, name: 'gayeon'}));
console.log(store.getState());
store.dispatch(addPost({title: '첫번째 글', content: '오늘 날씨 맑고 좋았다!'}));
console.log(store.getState());
store.dispatch(logOut());
console.log(store.getState());
