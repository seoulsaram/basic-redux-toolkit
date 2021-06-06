const initialState = [];

export const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...prevState, action.data];
    default:
      return prevState;
  }
};
