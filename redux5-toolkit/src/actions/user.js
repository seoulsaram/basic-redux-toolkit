import {createAsyncThunk} from '@reduxjs/toolkit';

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

//createAsyncThunk에선 try-catch로 감싸지 않는다. 그래야 에러가 났을 때 rejected상태가 리턴되므로
export const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    //이게 서버 응답이라고 가정하자.
    userId: 1,
    nickname: 'gayeon',
  });
  return result;
});
