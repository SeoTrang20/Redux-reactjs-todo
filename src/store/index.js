// src/store/index.js
// import { createStore } from 'redux';
// import todoReducer from '../reducers';

// const store = createStore(
//   todoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer'; // Thay thế 'reducers' bằng đường dẫn tới reducers của bạn

const store = configureStore({
  reducer: rootReducer,
});

export default store;