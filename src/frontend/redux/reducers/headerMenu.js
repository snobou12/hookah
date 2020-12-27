const initialState = {
  activeItem: null,
};

const headerMenu = (state = initialState, action) => {
  if (action.type === 'SET_MENU_ITEM') {
    return {
      ...state,
      activeItem: action.payload,
    };
  }
  return state;
};

export default headerMenu;
