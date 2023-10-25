// src/reducers/rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  language: languageReducer,
});

export default rootReducer;