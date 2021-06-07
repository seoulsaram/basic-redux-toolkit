import {createSlice} from '@reduxjs/toolkit';
import {addPost} from '../actions/post';
const initialState = {data: []};

export const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  },
  //state를 업데이트 하다보면(immer 사용하면서) 간혹 불변성이 깨지는 경우가 생기는데
  //ex: state=123
  //이런 경우 명시적으로 return state 를 해주면 문제없이 작동한다
  //extraReducers를 작성하는 방법2. builder. 이렇게 작성하는 것이 나중에 타입스크립트를 사용했을 경우
  //타입 추론이 잘 된다.
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {})
      //addMatcher는 여러 액션 간의 공통적인 것을 처리해줄 때 사용
      .addMatcher(
        (action) => {
          return action.type.includes('/pending');
        },
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addDefaultCase((state, action) => {
        //default
      }),
});

//reducers : 동기적 액션들 여기 넣음. 그리고 post안에서만 사용할 액션을 주로 넣음
//extraReducers : 비동기적인 액션들 여기에 넣음. post밖에서 사용되는 액션 주로 넣음
