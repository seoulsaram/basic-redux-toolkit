// import {LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT} from '../actions/user';
import {createSlice} from '@reduxjs/toolkit';
import {logIn} from '../actions/user';

const initialState = {isLoggingIn: false, data: null};

//slice를 사용하면 action을 알아서 만들어 줌. 그래서 app에서는 userSlice.action.logOut 이렇게 사용하면 됨
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state, action) {
      state.data = null;
    },
  },
  //여기서 createAsyncThunk에서 리턴되는 fulfilled, pending, rejected를 처리함
  extraReducers: {
    [logIn.pending](state, action) {
      //user/logIn/pending
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      //user/logIn/fulfilled
      //자동으로 immer가 적용되어 있어서 state = value 해주면 된다
      //action에서 받아오는 data는 toolkit에서는 무조건 payload임
      state.data = action.payload;
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      state.data = null;
      state.isLoggingIn = false;
    },
  },
});

//reducers : 동기적 액션들 여기 넣음. 그리고 post안에서만 사용할 액션을 주로 넣음.
//reducers 안에 있는 것들은 자동으로 액션이 만들어지므로, 따로 액션을 위한 공간이(파일) 필요 없지만
//extraReducers는 따로 액션을 만들어주어야 함
//extraReducers : 비동기적인 액션들 여기에 넣음. post밖에서 사용되는 액션 주로 넣음
