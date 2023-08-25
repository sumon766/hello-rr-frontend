import { combineReducers } from 'redux';
import greetingReducer from './reducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
