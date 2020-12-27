export const plusCountSlider = (index) => ({
  type: 'SLIDER_PLUS_COUNT',
  payload: index,
});

export const minusCountSlider = (index) => ({
  type: 'SLIDER_MINUS_COUNT',
  payload: index,
});

export const setSlider = (index) => ({
  type: 'SET_COUNT',
  payload: index,
});
