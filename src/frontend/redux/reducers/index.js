import headerMenuReducer from './headerMenu';
import nowDataReducer from './nowData';
import tableReserveReducer from './tableReserve';
import serverMethodsReducer from './serverMethods';
import { combineReducers } from 'redux'; // combineRedusers-соединение редюсеров всех

const rootReducer = combineReducers({
  headerMenu: headerMenuReducer,
  nowData: nowDataReducer,
  tableReserve: tableReserveReducer,
  serverMethods: serverMethodsReducer,
});

export default rootReducer;
