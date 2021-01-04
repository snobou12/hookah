const initialState = {
  items: [],
};

const serverMethods = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ALL_INFO':
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
export default serverMethods;
