import { combineReducers } from 'redux';
import favoriteReducer from './Reducer';

const rootReducer = combineReducers({
  // other reducers
  favorite: favoriteReducer,
});

export default rootReducer;