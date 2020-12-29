import headerMenuReducer from './headerMenu';
import topSliderReducer from './topSlider';
import tableReserveReducer from './tableReserve';
import { combineReducers } from 'redux'; // combineRedusers-соединение редюсеров всех

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  topSlider: topSliderReducer,
  tableReserve: tableReserveReducer,
});

export default rootReducer;
