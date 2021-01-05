const initialState = {
  items: [],
  isAuth: false,
};

const serverMethods = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_INFO':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};
export default serverMethods;
