const initialState = {
  activeItem: 0,
};

const topSlider = (state = initialState, action) => {
  if (action.type === 'SLIDER_PLUS_COUNT') {
    return {
      ...state,
      activeItem: state.activeItem + action.payload,
    };
  }
  if (action.type === 'SLIDER_MINUS_COUNT') {
    return {
      ...state,
      activeItem: state.activeItem - action.payload,
    };
  }
  if (action.type === 'SET_COUNT') {
    return {
      ...state,
      activeItem: action.payload,
    };
  }
  return state;
};

export default topSlider;
