export const logIn = (data) => {
  return (dispatch, getState) => {
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';
const logInRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const logInSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const logInFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

// module.exports = {logIn, logOut};
