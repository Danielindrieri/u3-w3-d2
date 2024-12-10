import { combineReducers } from '@reduxjs/toolkit';
import favouriteReducer from './reducers';

const mainReducer = combineReducers({
  favourite: favouriteReducer, 
});

export default mainReducer;
