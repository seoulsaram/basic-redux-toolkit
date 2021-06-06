import {LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT} from '../actions/user';
const initialState = {isLoggingIn: false, data: null};

export const userReducer = (prevState = initialState, action) => {
  // console.log(action.data);
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...prevState,
        isLoggingIn: true,
        data: action.data,
      };
    case LOG_IN_SUCCESS:
      return {
        ...prevState,
        isLoggingIn: false,
        data: action.data,
      };
    case LOG_IN_FAILURE:
      return {
        ...prevState,
        isLoggingIn: false,
        data: null,
      };
    // case LOG_IN:
    //   return {
    //     ...prevState,
    //     data: action.data,
    //   };
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      };
    default:
      return prevState;
  }
};
