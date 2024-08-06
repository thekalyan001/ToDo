// import { createStore } from "redux";
// import todoReducer from "./reducer";

// const store = createStore(todoReducer);

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todoSlice'; // Update the import path if necessary

const store = configureStore({
  reducer: {
    todos: todoSlice   , // Make sure this matches your slice name
  },
});

export default store;