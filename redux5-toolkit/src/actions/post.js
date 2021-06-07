import {createAsyncThunk} from '@reduxjs/toolkit';

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

export const addPost = createAsyncThunk('post/add', async () => {
  return await delay(500, {
    title: '새로운 글',
    content: '내용',
  });
});
