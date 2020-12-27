import headerMenuReducer from './headerMenu';
import topSliderReducer from './topSlider';
import { combineReducers } from 'redux'; // combineRedusers-соединение редюсеров всех

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  topSlider: topSliderReducer,
});

export default rootReducer;
