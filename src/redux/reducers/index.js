import { combineReducers } from 'redux';
import taskReducer from './tasks';

const rootReducer = combineReducers({
  taskReducer,
});

export default rootReducer;
