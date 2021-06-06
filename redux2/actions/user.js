const logIn = (data) => {
  //async action creater
  //함수를 리턴함
  //로그인 시도 후 2초 뒤에 성공한 것으로 간주하는 함수
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'nanana',
          })
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: 'LOG_IN_FAILURE',
    error,
  };
};

//sync actin creator
// const logIn = (data) => {
//   return {
//     //action
//     type: 'LOG_IN',
//     data,
//   };
// };

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

module.exports = {logIn, logOut};
